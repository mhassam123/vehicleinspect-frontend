// ========== STRIPE PAYMENT INTEGRATION ==========
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51TUkhyJUJgtgxpKE1U7ySD7Q2heAxzRXeGg9WHV1xlsN6U3VJbNmNOCGE2FxLpEsRfF2hVe0NhpA3iAv8L5j0bbO00zdJLvTIC'; // 🔴 pk live key 
const BACKEND_URL = 'http://localhost:3000';

let stripe = null;
let cardElement = null;
let currentPaymentData = null;

// Initialize Stripe
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Stripe !== 'undefined') {
        stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
        const elements = stripe.elements();
        
        cardElement = elements.create('card', {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#32325d',
                    fontFamily: '"Inter", sans-serif',
                    '::placeholder': { color: '#aab7c4' }
                }
            }
        });
        
        if (document.getElementById('card-element')) {
            cardElement.mount('#card-element');
        }
        
        cardElement.addEventListener('change', function(event) {
            const displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
        
        console.log("✅ Stripe initialized");
    }
});

// Open payment modal
window.openPaymentModal = function(amount, planName, customerName, customerEmail) {
    currentPaymentData = { amount, planName, customerName, customerEmail };
    document.getElementById('paymentSummary').innerHTML = `${planName} - £${amount}`;
    document.getElementById('payAmount').innerHTML = amount;
    document.getElementById('paymentModal').classList.add('active');
};

// Process payment
async function processPayment() {
    if (!stripe || !cardElement) {
        showToast('Stripe not initialized', true);
        return;
    }
    
    const payBtn = document.getElementById('stripePayBtn');
    const amount = currentPaymentData?.amount * 100;
    const customerEmail = currentPaymentData?.customerEmail;
    const customerName = currentPaymentData?.customerName;
    
    payBtn.disabled = true;
    payBtn.innerHTML = 'Processing...';
    
    try {
        // Create payment method
        const { paymentMethod, error: pmError } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: { name: customerName, email: customerEmail }
        });
        
        if (pmError) {
            showToast(pmError.message, true);
            return;
        }
        
        // Call backend
        const response = await fetch(`${BACKEND_URL}/api/create-payment-intent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: amount,
                currency: 'gbp',
                customer_email: customerEmail
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: paymentMethod.id
            });
            
            if (confirmError) {
                showToast('Payment failed: ' + confirmError.message, true);
            } else {
                showToast('✅ Payment successful! Booking confirmed.', false);
                document.getElementById('paymentModal').classList.remove('active');
                
                if (window.saveBookingAfterPayment) {
                    window.saveBookingAfterPayment('paid');
                }
            }
        } else {
            showToast('Payment failed: ' + data.error, true);
        }
        
    } catch (error) {
        showToast('Error: ' + error.message, true);
    } finally {
        payBtn.disabled = false;
        payBtn.innerHTML = 'Pay £' + (currentPaymentData?.amount || 0);
    }
}

// Event listeners
document.getElementById('closePaymentModal')?.addEventListener('click', function() {
    document.getElementById('paymentModal').classList.remove('active');
});

document.getElementById('stripePayBtn')?.addEventListener('click', processPayment);
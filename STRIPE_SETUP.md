# Stripe Integration Setup Guide

This guide will help you set up the complete Stripe integration for Mista Oh Restaurant's online ordering system.

## Features Implemented

- ✅ Full shopping cart with add/update/delete functionality
- ✅ Stripe Checkout with multiple payment methods
- ✅ Order confirmation emails
- ✅ Success page with order details
- ✅ Webhook handling for payment events
- ✅ Secure server-side payment processing

## Environment Variables

The following environment variables are already configured in your project:

\`\`\`env
# Stripe Keys
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Email Configuration
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_SECURE=true
MAIL_USER=info@dhdgroup.net
MAIL_PASS=cuszcdpgwcxerhff
MAIL_FROM_NAME=DHD
MAIL_FROM_ADDRESS=info@dhdgroup.net

# Stripe Webhook Secret (you need to add this)
STRIPE_WEBHOOK_SECRET=whsec_...
\`\`\`

## Setup Instructions

### 1. Stripe Webhook Configuration

To receive order confirmation emails, you need to set up a Stripe webhook:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL: `https://your-domain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook signing secret
6. Add it to your environment variables as `STRIPE_WEBHOOK_SECRET`

### 2. Payment Methods Supported

**One-Time Purchases:**
- Credit/Debit Cards (Visa, Mastercard, Amex, etc.)
- Cash App Pay
- Affirm (Buy now, pay later)
- Afterpay/Clearpay
- Klarna
- US Bank Account (ACH)
- Link (Stripe's one-click checkout)

**Subscriptions:**
- Credit/Debit Cards
- US Bank Account (ACH)

### 3. Testing the Integration

#### Test Cards

Use these test card numbers in Stripe's test mode:

- **Success:** 4242 4242 4242 4242
- **Decline:** 4000 0000 0000 0002
- **Requires Authentication:** 4000 0025 0000 3155

Use any future expiration date, any 3-digit CVC, and any ZIP code.

#### Test Flow

1. **Add items to cart:**
   - Navigate to `/menu`
   - Click "Add to Cart" on any menu item
   - Cart sidebar opens automatically

2. **Proceed to checkout:**
   - Click "Proceed to Checkout" in cart sidebar
   - You'll be redirected to Stripe Checkout

3. **Complete payment:**
   - Enter test card information
   - Fill in shipping address
   - Complete the payment

4. **Verify success:**
   - You'll be redirected to `/checkout/success`
   - Order details will be displayed
   - Check email for order confirmation

### 4. Order Flow

\`\`\`
Customer adds items to cart
         ↓
Customer clicks "Proceed to Checkout"
         ↓
Stripe Checkout session created (API: /api/checkout)
         ↓
Customer completes payment on Stripe
         ↓
Stripe sends webhook to /api/webhooks/stripe
         ↓
Order confirmation email sent
         ↓
Customer redirected to /checkout/success
         ↓
Order details displayed
\`\`\`

### 5. Email Notifications

Order confirmation emails include:
- Order ID and total amount
- Itemized list of ordered items
- Delivery address and phone number
- Restaurant contact information
- Professional HTML template with branding

### 6. Security Best Practices

✅ **Implemented:**
- Server-side price validation
- Webhook signature verification
- Secure environment variable handling
- HTTPS required for production
- No sensitive data in client-side code

### 7. Going Live

When ready to accept real payments:

1. **Switch to Live Mode in Stripe Dashboard**
2. **Update environment variables:**
   - Replace test keys with live keys
   - Update webhook endpoint to production URL
   - Add live webhook secret
3. **Test thoroughly in production**
4. **Monitor Stripe Dashboard for transactions**

### 8. Troubleshooting

**Checkout not working:**
- Check browser console for errors
- Verify Stripe keys are correct
- Ensure NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set

**Emails not sending:**
- Verify MAIL_* environment variables
- Check webhook is configured correctly
- Look for errors in webhook logs

**Webhook not receiving events:**
- Verify webhook URL is publicly accessible
- Check webhook signing secret matches
- Review Stripe webhook logs in dashboard

## API Routes

- `POST /api/checkout` - Create checkout session
- `GET /api/checkout/session` - Retrieve session details
- `POST /api/webhooks/stripe` - Handle Stripe webhooks

## File Structure

\`\`\`
app/
├── api/
│   ├── checkout/
│   │   ├── route.ts (Create checkout session)
│   │   └── session/
│   │       └── route.ts (Get session details)
│   └── webhooks/
│       └── stripe/
│           └── route.ts (Webhook handler)
├── checkout/
│   ├── success/
│   │   └── page.tsx (Success page)
│   └── cancel/
│       └── page.tsx (Cancel page)
components/
├── cart-sidebar.tsx (Shopping cart UI)
contexts/
├── cart-context.tsx (Cart state management)
lib/
├── stripe.ts (Stripe client)
├── email.ts (Email service)
└── products.ts (Product catalog)
\`\`\`

## Support

For issues or questions:
- Email: info@dhdgroup.net
- Phone: (646) 559-8858
- Stripe Documentation: https://stripe.com/docs

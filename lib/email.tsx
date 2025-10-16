import nodemailer from "nodemailer"
import type Stripe from "stripe"

interface OrderEmailData {
  sessionId: string
  customerEmail: string
  customerName: string
  amount: number
  lineItems: Stripe.LineItem[]
  shippingAddress?: Stripe.Address | null
  phone?: string
  isSubscription?: boolean
  subscriptionId?: string
}

export async function sendOrderConfirmationEmail(data: OrderEmailData) {
  const {
    sessionId,
    customerEmail,
    customerName,
    amount,
    lineItems,
    shippingAddress,
    phone,
    isSubscription,
    subscriptionId,
  } = data

  // Create transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number.parseInt(process.env.MAIL_PORT || "465"),
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  // Format line items for email
  const itemsHtml = lineItems
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
        <strong>${item.description}</strong>
        ${item.quantity && item.quantity > 1 ? `<br><span style="color: #6b7280; font-size: 14px;">Quantity: ${item.quantity}</span>` : ""}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; color: #dc2626; font-weight: 600;">
        $${((item.amount_total || 0) / 100).toFixed(2)}${isSubscription ? "/delivery" : ""}
      </td>
    </tr>
  `,
    )
    .join("")

  // Format shipping address
  const addressHtml = shippingAddress
    ? `
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <h3 style="margin: 0 0 12px 0; color: #111827; font-size: 16px; display: flex; align-items: center;">
        📍 Delivery Address
      </h3>
      <p style="margin: 0; line-height: 1.6; color: #374151;">
        ${shippingAddress.line1}<br>
        ${shippingAddress.line2 ? `${shippingAddress.line2}<br>` : ""}
        ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postal_code}
      </p>
      ${phone ? `<p style="margin: 12px 0 0 0; color: #374151;">📞 ${phone}</p>` : ""}
    </div>
  `
    : ""

  const subscriptionBanner = isSubscription
    ? `
    <tr>
      <td style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); padding: 20px 30px; text-align: center; border-bottom: 3px solid #22c55e;">
        <div style="font-size: 32px; margin-bottom: 8px;">🔄</div>
        <h3 style="margin: 0 0 8px 0; color: #111827; font-size: 20px; font-weight: 700;">
          Subscription Active!
        </h3>
        <p style="margin: 0; color: #374151; font-size: 14px;">
          Your meals will be delivered automatically based on your subscription plan.
        </p>
        ${subscriptionId ? `<p style="margin: 8px 0 0 0; color: #6b7280; font-size: 12px;">Subscription ID: ${subscriptionId}</p>` : ""}
      </td>
    </tr>
  `
    : ""

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isSubscription ? "Subscription Confirmation" : "Order Confirmation"} - Mista Oh</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                Mista Oh
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                Authentic Korean Cuisine
              </p>
            </td>
          </tr>

          ${subscriptionBanner}

          <!-- Success Message -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <div style="width: 80px; height: 80px; background-color: #dcfce7; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 40px;">✓</span>
              </div>
              <h2 style="margin: 0 0 12px 0; color: #111827; font-size: 28px; font-weight: 700;">
                ${isSubscription ? "Subscription Confirmed!" : "Order Confirmed!"}
              </h2>
              <p style="margin: 0; color: #6b7280; font-size: 16px; line-height: 1.5;">
                Thank you for your ${isSubscription ? "subscription" : "order"}, <strong style="color: #111827;">${customerName}</strong>!<br>
                ${isSubscription ? "Your recurring meals are all set up." : "We're preparing your delicious Korean meal."}
              </p>
            </td>
          </tr>

          <!-- Order Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <h3 style="margin: 0; color: #111827; font-size: 18px;">${isSubscription ? "Subscription" : "Order"} Summary</h3>
                  <span style="color: #6b7280; font-size: 14px;">${isSubscription ? "Subscription" : "Order"} #${sessionId.slice(-8).toUpperCase()}</span>
                </div>
              </div>

              <!-- Items Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <thead>
                  <tr style="background-color: #f9fafb;">
                    <th style="padding: 12px; text-align: left; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Item
                    </th>
                    <th style="padding: 12px; text-align: right; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
                <tfoot>
                  <tr>
                    <td style="padding: 20px 12px 12px 12px; text-align: right; font-size: 18px; font-weight: 700; color: #111827;">
                      ${isSubscription ? "Per Delivery:" : "Total:"}
                    </td>
                    <td style="padding: 20px 12px 12px 12px; text-align: right; font-size: 24px; font-weight: 700; color: #dc2626;">
                      $${(amount / 100).toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>

              ${addressHtml}
            </td>
          </tr>

          <!-- What's Next -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); padding: 24px; border-radius: 8px; border: 1px solid #fbbf24;">
                <h3 style="margin: 0 0 16px 0; color: #111827; font-size: 18px; text-align: center;">
                  What Happens Next?
                </h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="33%" style="text-align: center; padding: 0 8px;">
                      <div style="font-size: 32px; margin-bottom: 8px;">📧</div>
                      <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">Email Sent</p>
                      <p style="margin: 4px 0 0 0; font-size: 12px; color: #6b7280;">This confirmation</p>
                    </td>
                    <td width="33%" style="text-align: center; padding: 0 8px;">
                      <div style="font-size: 32px; margin-bottom: 8px;">👨‍🍳</div>
                      <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">Preparing</p>
                      <p style="margin: 4px 0 0 0; font-size: 12px; color: #6b7280;">Your meal</p>
                    </td>
                    <td width="33%" style="text-align: center; padding: 0 8px;">
                      <div style="font-size: 32px; margin-bottom: 8px;">${isSubscription ? "🔄" : "🚚"}</div>
                      <p style="margin: 0; font-size: 14px; font-weight: 600; color: #111827;">${isSubscription ? "Recurring" : "Delivery"}</p>
                      <p style="margin: 4px 0 0 0; font-size: 12px; color: #6b7280;">${isSubscription ? "Automatic" : "On its way"}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px;">
                Need help with your ${isSubscription ? "subscription" : "order"}?
              </p>
              <p style="margin: 0; color: #111827; font-size: 14px;">
                📞 <a href="tel:6465598858" style="color: #dc2626; text-decoration: none; font-weight: 600;">(646) 559-8858</a>
                &nbsp;|&nbsp;
                📧 <a href="mailto:info@dhdgroup.net" style="color: #dc2626; text-decoration: none; font-weight: 600;">info@dhdgroup.net</a>
              </p>
              <p style="margin: 16px 0 0 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Mista Oh. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `

  // Send email
  await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
    to: customerEmail,
    subject: `${isSubscription ? "Subscription" : "Order"} Confirmation - Mista Oh Restaurant`,
    html: emailHtml,
  })

  console.log(`[v0] ${isSubscription ? "Subscription" : "Order"} confirmation email sent to ${customerEmail}`)
}

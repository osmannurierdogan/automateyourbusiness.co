const Stripe = require('stripe');
const express = require('express');
const router = express.Router();

// Stripe API anahtarı kontrolü
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.error("STRIPE_SECRET_KEY is not defined in .env.local");
  throw new Error("Internal server configuration error");
}

const stripe = new Stripe(stripeSecretKey);

// Ürün isimlerini getiren yardımcı fonksiyon
function getProductName(productId) {
  const names = {
    "blog-automation": "Blog Otomasyonu",
    "social-automation": "Sosyal Medya Otomasyonu",
    "email-automation": "Email Otomasyonu",
    "ecommerce-automation": "E-ticaret Otomasyonu"
  };
  return names[productId] || "Otomasyon Paketi";
}

// Ürün fiyatlarını getiren yardımcı fonksiyon
function getProductPrice(productId) {
  const prices = {
    "blog-automation": 999, // 9.99 USD
    "social-automation": 1999, // 19.99 USD
    "email-automation": 1499, // 14.99 USD
    "ecommerce-automation": 2499, // 24.99 USD
  };
  return prices[productId];
}

router.post('/', async (req, res) => {
  try {
    const { productId } = req.body;

    // Validate productId
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const price = getProductPrice(productId);
    if (!price) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    // Create Stripe session
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: getProductName(productId),
                description: "Otomasyon paketi",
              },
              unit_amount: price,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL || "http://localhost:3000"}/tools/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL || "http://localhost:3000"}/tools`,
        metadata: {
          productId,
        },
      });

      return res.json({ sessionId: session.id });
    } catch (stripeError) {
      console.error("Stripe session creation error:", stripeError);
      return res.status(500).json({
        error: stripeError.message || "Failed to create Stripe session"
      });
    }
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

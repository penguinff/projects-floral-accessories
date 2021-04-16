const functions = require("firebase-functions");

// for stripe-checkout-form
exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "./user-profile/my-order-history",
    cancel_url: "./checkout",
    line_items: data,
  });

  return {
    id: session.id,
  };
});

// for stripe-checkout-element
exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const paymentIntent = await stripe.paymentIntents.create({
    payment_method_types: ["card"],
    currency: "twd",
    amount: data,
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});

const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000/user-profile/my-order-history",
    cancel_url: "http://localhost:3000/checkout",
    line_items: data,
  });

  return {
    id: session.id,
  };
});

/* eslint-disable linebreak-style */
const functions = require("firebase-functions");

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

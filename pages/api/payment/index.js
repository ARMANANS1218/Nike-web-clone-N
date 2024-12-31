export default function handler(req, res) {
  try {
    const paymentSuccessful = Math.random() < 0.5;

    if (paymentSuccessful) {
      res.status(200).json({ success: true });
    } else {
      throw new Error("Payment failed");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

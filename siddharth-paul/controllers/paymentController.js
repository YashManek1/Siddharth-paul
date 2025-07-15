import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import { addOrder } from '../googleSheets/orderSheetUtils.js';

dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// POST /api/payment/create
export const createPayment = async (req, res) => {
  try {
    const { totalAmount } = req.body;
    const options = {
      amount: totalAmount * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch {
    res.status(500).json({ error: 'Failed to create payment order' });
  }
};

// POST /api/payment/verify
export const verifyPayment = async (req, res) => {
  try {
    // You can verify signature here (optional)
    // Store order/client info in Google Sheets
    await addOrder('ClientInfo', req.body); // tabName: 'ClientInfo'
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Failed to verify/store order' });
  }
};
import mongoose from "mongoose";

const AddonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  coursePrice: {
    type: Number,
    required: true,
  },
  selectedAddons: {
    type: [AddonSchema],
    default: [],
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
    default: null,
  },
  razorpaySignature: {
    type: String,
    default: null,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  buyerEmail: {
    type: String,
    required: true,
  },
  buyerName: {
    type: String,
    required: false,
  },
  afterPaymentOffer: {
    type: String, // e.g., "₹1000 off on next course"
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", OrderSchema);

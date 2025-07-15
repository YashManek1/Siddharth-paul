import mongoose from "mongoose";

const addonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  finalPrice: { type: Number, required: true },
  afterPaymentDiscount: { type: String },
  afterPaymentPrice: { type: Number },
  addons: [addonSchema],
});

export default mongoose.model("Course", courseSchema);

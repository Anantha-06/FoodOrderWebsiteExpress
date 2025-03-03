import mongoose from "mongoose";

const { schema } = mongoose;
 const userSchema = new schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique },
  phone: { type: Number, required: true, maxlength: 10 },
  password: { type: String, required: true, maxlength: 8 },
  role: { type: String, enum: ["user", "admin", "seller"], default: "user" },
  profilePic: {
    type: String,
    default:
      "https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756875/Food%20Order%20Website/noeuwugmxrhszkjcq2no.png",
  },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User',userSchema)
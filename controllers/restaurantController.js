import { cloudinaryInstance } from "../config/cloudinary.js";
import { Restaurant } from "../models/restaurantModel.js";
import { User } from "../models/userModel.js";


export async function createRestaurant(req, res) {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const { name, email, phone, rating, menu } =
      req.body;
    const restaurantExist = await Restaurant.findOne({ name: name });
    if (restaurantExist) {
      return res.status(400).json("Restaurant Already Exists");
    }
    if (!req.file) {
        return res.status(400).json({ message: "No image file uploaded" });
      }
      const imageUri = await cloudinaryInstance.uploader.upload(req.file.path);

    const newRestaurant = new Restaurant({
      name,
      email,
      phone,
      image: imageUri.url,
      rating,
      menu,
      sellerId: req.user.id,
    });
    await newRestaurant.save();
    res
      .status(201)
      .json({ message: "Restaurant Added Successfully", newRestaurant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

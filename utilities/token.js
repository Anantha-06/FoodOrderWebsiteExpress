import jwt from "jsonwebtoken";

export const generateToken = (user, role) => {
  try {
    var token = jwt.sign(
      { id: "user._id", role: "user.role" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
  } catch (error) {
    console.error("error generating token",error.message);
    return null
  }
};

import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    // check if user is already registered
    const exist = await User.findOne({ email: req.body.email });
    if (exist)
      return res.status(200).send({ massage: "User already registered" });
    // create a user a new user
    const user = new User(req.body);

    // save the user to database
    user.save();

    res.status(201).json({
      status: "success",
      message: "User Registered!",
      data: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(err.status).json({
      status: "fail",
      message: err.message,
      I,
    });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log("j");
  try {
    const user = await User.findOne({ email });
    // if not exits
    if (!user)
      return res.status(404).send({ message: "The username does not exist" });

    // compare password
    user.comparePassword(password, function (err, isMatch) {
      if (err) return res.status(500).send({ message: err.message });

      if (!isMatch) {
        return res.status(400).send("Invalid email or password");
      }
      // create access token
      const accessToken = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "365d",
        }
      );
      res.status(201).json({
        status: "success",
        message: "User Logged In!",
        data: {
          id:user.id,
          accessToken,
        },
      });
    });
  } catch (error) {
    res.status(err.status).json({
      status: "fail",
      message: err.message,
    });
  }
};

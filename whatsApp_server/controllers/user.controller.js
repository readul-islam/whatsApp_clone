import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { sendToClient } from "../utils/hooks.js";

export const userRegister = async (req, res) => {
  try {
    // check if user is already registered
    const exist = await User.findOne({ email: req.body.email });
    if (exist)
      return res
        .status(200)
        .send(sendToClient("fail", "User already registered"));

    // create a user a new user
    const user = new User(req.body);

    // save the user to database
    user.save();
    // response data
    const resData = {
      email: user.email,
      id: user.id,
    };
    res
      .status(201)
      .json(sendToClient("success", "Registration Successful", resData));
    {
    }
  } catch (error) {
    next(error);
  }
};

// note: client side you will put data in params
// but in server side you will get req.query

export const userLogin = async (req, res, next) => {
  const { email, password } = req.query;
  console.log(email);

  try {
    const user = await User.findOne({ email });
    // if not exits
    if (!user)
      return res.send(sendToClient("fail", "The username does not exist"));

    // compare password
    user.comparePassword(password, function (err, isMatch) {
      if (err) return res.status(500).send(sendToClient("fail", err.message));

      // check if the password not matched
      if (!isMatch) {
        return res
          .status(400)
          .send(sendToClient("fail", "Invalid email or password"));
      }
      // create access token
      const accessToken = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "365d",
        }
      );
      // response data
      const resData = {
        id: user.id,
        accessToken,
      };
      res.status(201).json(sendToClient("success", "User Logged In!", resData));
    });
  } catch (error) {
    next(error);
  }
};

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { escape, sendToClient } from "../utils/hooks.js";

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
        email: user.email,
      };
      res.status(201).json(sendToClient("success", "User Logged In!", resData));
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (req, res, next) => {
  const { id, userName, About } = req.body;
  console.log(req.body);
  console.log(req.file.path);

  const updateUserInfo = {
    userName,
    About,
    image: req.file.path,
  };

  let updatedUser = await User.findOneAndUpdate({ _id: id }, updateUserInfo, {
    // upsert: true,
    new: true,
  });
  console.log(updatedUser);
  res.status(200).json(sendToClient("success", "update", updatedUser));
  try {
  } catch (error) {
    next(error);
  }
};
export const allUserWithOutMe = async (req, res, next) => {
  const { id } = req.query;

  if (id) {
    let users = await User.find().where("_id").ne(id);
    res.status(200).json(sendToClient("success", "update", users));
  } else {
    res.status(200).json(sendToClient("fail", "userId required"));
  }
  try {
  } catch (error) {
    next(error);
  }
};

export const searchUser = async (req, res, next) => {
  const query = req.query.searchQuery;

  const name_search_regex = new RegExp(escape(query), "i");
  const email_search_regex = new RegExp("^" + escape(query) + "$", "i");
  console.log(email_search_regex)
 
  try {
    if (query !== "") {
      const users = await User.find(
        {
          $or: [
            {
              // userName:{ '$regex': query, $options: 'i' }, // acceptable
              userName: name_search_regex, // acceptable
            },
            {
             
              email: email_search_regex, // acceptable
            },
          ],
        },
        "userName image"
      );
      res.status(200).json(sendToClient("success", "user list", users));
    } else {
      res
        .status(200)
        .json(sendToClient("fail", "You must provide some text to search!"));
    }
  } catch (error) {
    next(error);
  }
};

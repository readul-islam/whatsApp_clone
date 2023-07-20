import User from "../models/user.model.js";

export const userRegister = async (req, res) => {
  try {


    // check if user is already registered
    const exist = await User.findOne({email:req.body.email})
    if(exist ) return res.status(200).send({massage:'User already registered'})
    // create a user a new user
    const user = new User(req.body);

    console.log(user);

    // save the user to database
    user.save();

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
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
      res.send({ status: true });
    });
  } catch (error) {
    res.status(500).send(error.massage);
  }
};

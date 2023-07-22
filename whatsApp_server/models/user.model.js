import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;
const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /.+\@.+\..+/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },

    password: { type: String, required: true },
    image: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
    About: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods = {
  comparePassword: function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  },
};

const User = mongoose.model("User", UserSchema);

export default User;

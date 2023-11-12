const router = require("express").Router();
const bcrypt = require("bcrypt");
const salt = 10;

const User = require("../models/user");

//Register

router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const hashpassword = await bcrypt.hashSync(password, salt);
    const user = new User({ email, password: hashpassword, username });
    await user.save().then(() => {
      res.status(200).json({ user: user });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user already exist" });
  }
});

//Signin

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send(400).json({ message: "Please Sign up first" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.send(400).json({ message: "Password is incorrect" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

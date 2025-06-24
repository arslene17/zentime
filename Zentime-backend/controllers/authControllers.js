const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// test controller
exports.test = async (req, res) => {
  try {
    res.send("Test controller is working fine!");
  } catch (error) {
    console.error(`❌ Error in test controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// register controller
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User with this email already exists" });
    }

    let newUser = new User({ ...req.body });

    // Hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;

    // Save new user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );
    res
      .status(201)
      .send({ success: [{ msg: "Register Successfully !" }], newUser, token });
  } catch (error) {
    console.error(`❌ Error in register controller: ${error.message}`);
    res.status(500).send({ errors: [{ msg: "Can not register" }] });
  }
};

// login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "User not found with this email" }] });
    }

    // Check password
    const hashedPassword = await bcrypt.compare(password, foundUser.password);

    if (!hashedPassword) {
      return res.status(400).send({ errors: [{ msg: "Password incorrect" }] });
    }

    const token = jwt.sign(
      {
        id: foundUser._id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(200).send({
      success: [{ msg: `Hello ${foundUser.firstName} Welcome Back !` }],
      foundUser,
      token,
    });
  } catch (error) {
    console.error(`❌ Error in login controller: ${error.message}`);
    res.status(500).send({ errors: [{ msg: "Can not login" }] });
  }
};

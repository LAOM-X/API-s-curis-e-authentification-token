/* eslint-disable consistent-return */
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const verify = require("./verifyToken");
const { registerValidation, loginValidation } = require("../validation");

// register
router.post("/register", async (req, res) => {
  // validation
  const { error } = registerValidation(req.body);
  if (error) { return res.status(400).send({ error: error.details[0].message }); }

  // checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) { return res.status(400).send({ error: "Email Already Exists" }); }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create a new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    res.send({ id: user.id, user: user.email });
  } catch (err) {
    res.status(400).send({ err });
  }
});

// login
router.post("/login", async (req, res) => {
  // validation of the data
  const { error } = loginValidation(req.body);
  if (error) { return res.status(400).send({ error: error.details[0].message }); }

  // checking if the email exists in the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) { return res.status(400).send({ error: "Email is not found" }); }

  // password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) { return res.status(400).send({ error: "Invalid password" }); }

  // create and assign a token
  const token = jwt.sign({ user: user.email }, process.env.TOKEN_SECRET);
  res.header("Authorization", `Bearer ${token}`).send({ token, Authorization: `Bearer ${token}` });
});

router.get("/users", verify, async (req, res) => {
  const users = [];// the array which will contains all the users
  // search and select all the users registrered
  User.find()
    .then((usersDb) => {
      // for each user we have to take the id and email (without the password)
      usersDb.forEach((currentUser) => users.push(currentUser.email));
      // send all the users
      res.status(200).send(users);
    })
    .catch((error) => res.status(400).json({ error }));// if an error occurs
});

module.exports = router;

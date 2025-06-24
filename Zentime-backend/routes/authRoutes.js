// require express
const express = require("express");
const { test, register, login } = require("../controllers/authControllers");
const { registerValidation,  validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");


// create router
const router = express.Router();

router.get('/test', test)

router.post("/register", registerValidation(), validator, register);

router.post('/login', login)

router.get('/current', isAuth, (req, res) => {
    res.status(200).send({
        user: req.user,
        message: "Current user fetched successfully"
    });
})


module.exports = router;
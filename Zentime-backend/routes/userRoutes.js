// require express
const express = require("express");
const { test, getUsers, getUserById, updateUser, deleteUser } = require("../controllers/userControllers");
const isAdmin = require("../middlewares/isAdmin");

// create router
const router = express.Router();

// import user controller
router.get('/test', isAdmin , test)

router.get("/getUsers", isAdmin, getUsers);

router.get("/getUserById/:id", getUserById); 

router.put('/updateUser/:id', updateUser )

router.delete("/deleteUser/:id", isAdmin, deleteUser);

// export the router
module.exports = router;
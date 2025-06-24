const User = require("../models/userModel");



exports.test = async (req, res) => {
    try {
        res.status(200).send("Test controller user is working fine!");
    } catch (error) {
        console.error(`❌ Error in test controller: ${error.message}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// get users controller
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude password field
        if (!users || users.length === 0) {
            return res.status(404).send({ message: "No users found" });
        }
        res.status(200).send({ message: "Users fetched successfully", users });
    } catch (error) {
        console.error(`❌ Error in getUsers controller: ${error.message}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// get user by ID controller
exports.getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id, '-password'); // Exclude password field
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User fetched successfully", user });
    } catch (error) {
        console.error(`❌ Error in getUserById controller: ${error.message}`);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

// update user controller
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, userData, {
          new: true,
        });
        res.status(200).send({message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error(`❌ Error in updateUser controller: ${error.message}`);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

// delete user controller
exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        console.error(`❌ Error in deleteUser controller: ${error.message}`);
        res.status(500).send({ message: "Internal Server Error" });
    }
}
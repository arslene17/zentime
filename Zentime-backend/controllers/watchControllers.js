const Watch = require("../models/watchModel");

exports.test = async (req, res) => {
  try {
    res.status(200).send("test controller watch is working fine");
  } catch (error) {
    console.error(`Error in test controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// add new watch controller
exports.addWatch = async (req, res) => {
  try {
    const newWatch = req.body;
    const savedWatch = new Watch(newWatch);
    await savedWatch.save();
    res.status(201).send({
      message: "Watch added successfully",
      watch: savedWatch,
    });
  } catch (error) {
    console.error(`Error in addWatch controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all watches controller
exports.getAllWatches = async (req, res) => {
  try {
    const foundWatches = await Watch.find({});
    res.status(200).send({
      message: "all watches fetched successfully",
      watches: foundWatches,
    });
  } catch (error) {
    console.error(`Error in getAllWatches controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get watches by ID controller

exports.getWatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundWatch = await Watch.findById(id);
    if (!foundWatch) {
      return res.status(404).json({ message: "Watch not found" });
    }
    res.status(200).send({
      message: "Watch fetched successfully",
      watch: foundWatch,
    });
  } catch (error) {
    console.error(`Error in getWatchById controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get watches by Model controller
exports.getWatchesByBrand = async (req, res) => {
  try {
    const {brand} = req.query
    if (!brand){
      return res.status(400).send({ message: "Brand query parameter is required" });
    }
    const foundWatches = await Watch.find({brand: {$regex: brand, $options: 'i' }});
    if (foundWatches.length === 0) {
      return res.status(404).json({ errors: [{ message: "No watches found for the specified brand"}] });
    }
    res.status(200).send({success: [{message: "Watches fetched successfully"}], watches: foundWatches});
  } catch (error) {
    console.error(`Error in getWatchesByBrand controller: ${error.message}`);
    res
      .status(500)
      .json({
        errors: [{ message: "Error 500 server fail" }],
      });
    
  }
}


// delete watch controller
exports.deleteWatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWatch = await Watch.findByIdAndDelete(id);
    if (!deletedWatch) {
      return res.status(404).json({ message: "Watch not found" });
    }
    res.status(200).send({
      message: "Watch deleted successfully",
      watch: deletedWatch,
    });
  } catch (error) {
    console.error(`Error in deleteWatch controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// update watch by id controller
exports.updateWatchById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWatchData = req.body;
    const updatedWatch = await Watch.findByIdAndUpdate(id, updatedWatchData, { new: true });
    res.status(200).send({
      message: "Watch updated successfully",
      watch: updatedWatch,
    });
  } catch (error) {
    console.error(`Error in updateWatchById controller: ${error.message}`);
    res.status(500).json({ message: "Internal Server Error" });
    
  }
}
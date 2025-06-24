// require express
const express = require('express');
const {
  test,
  addWatch,
  getWatchById,
  getAllWatches,
  getWatchesByBrand,
  deleteWatchById,
  updateWatchById,
} = require("../controllers/watchControllers");

// create router
const router = express.Router();

// import watch controller
router.get('/test', test)

router.post('/addWatch', addWatch)

router.get('/getAllWatches', getAllWatches)

router.get('/getWatchById/:id', getWatchById);

router.get("/getWatchByBrand", getWatchesByBrand);

router.delete('/deleteWatch/:id', deleteWatchById)

router.put('/updateWatch/:id', updateWatchById);

// export the router
module.exports = router;
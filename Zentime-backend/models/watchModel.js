// require mongoose
const mongoose = require("mongoose");

// get schema from mongoose
const schema = mongoose.Schema;

// create watch schema
const watchSchema = new schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
      toLowerCase: true,
    },
    model: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "watches",
  }
);

const Watch = mongoose.model("Watch", watchSchema);

module.exports = Watch;

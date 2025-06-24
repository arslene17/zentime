// requir express
const express = require('express');

// create an instance of express
const app = express();

// require cors to allow cross-origin requests
const cors = require("cors");

app.use(
  cors()
);

// require body-parser to parse JSON requests
app.use(express.json());

//dotenv configuration
require('dotenv').config();

//PORT configuration
const PORT = process.env.PORT || process.env.PORT_2;

// creat server
app.listen(PORT,(error)=> {
    error
        ? console.error(`Error starting server: ${error}`)
        : console.log(`Server is running on http://127.0.0.1:${PORT}`);
})

// connect to MongoDB
const connectDB = require('./config/connectDB');
connectDB();

// import routes
app.use('/api/watch', require('./routes/watchRoutes'));

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/users", require("./routes/userRoutes")); 

app.use((req, res)=> {
    res.send("API is running...");
})
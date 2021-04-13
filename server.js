// Boilerplate express app with Mongo
// Required modules
const express = require("express");
const mongoose = require("mongoose");

// Establish port
const PORT = process.env.PORT || 3010;

// Set up Express app
const app = express();

// Allow URL processing and JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Set up Static folder
app.use(express.static("public"));

// Connect to Mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// Set up Routes
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

// Commence listening on required port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

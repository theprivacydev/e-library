const express = require("express");
const morgan = require('morgan')
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const BooksApiRoutes = require('./routes/BooksApi');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api/books', BooksApiRoutes)


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
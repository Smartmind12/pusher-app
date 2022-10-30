const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an App.
const app = express();

// Vote route.
const vote = require("./routes/vote")

// Update X-Powered-By headers in Express.
app.use(function (req, res, next) {
  res.header("X-Powered-By", "Blood, sweat, and tears.");
  next();
});

// Serve the static files from public.
app.use( express.static( path.join(__dirname, 'public') ) );

// Include the body-parser middle ware.
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Enable CORS.
app.use( cors() );

// Handle vote routes.
app.use("/vote", vote);

// Set the port.
const port = 3000;
// Listen to incoming connections.
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const vote = require("./routes/vote")

app.use(function (req, res, next) {
  res.header("X-Powered-By", "Blood, sweat, and tears.");
  next();
});

app.use( express.static( path.join(__dirname, 'public') ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.use( cors() );

app.use("/vote", vote);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

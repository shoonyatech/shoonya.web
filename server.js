const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/shoonya"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/shoonya/index.html"));
});

const port = process.env.PORT || 2000;
// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

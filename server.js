const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let counter = 0;

app.get('/', (req, res) => {
  counter++;
  res.send("Visitor count: " + counter);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});

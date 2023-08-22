const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");

const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});

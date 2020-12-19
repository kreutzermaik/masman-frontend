const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

const einstempeln = require("./routes/records.js");
app.use("/", einstempeln);

app.listen(3000, () => console.log("Server Listening at 3000"));

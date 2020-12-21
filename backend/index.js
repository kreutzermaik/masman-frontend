const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

const records = require("./routes/records.js");
app.use("/", records);

const workouts = require("./routes/workouts.js");
app.use("/", workouts);

app.listen(3000, () => console.log("Server Listening at 3000"));

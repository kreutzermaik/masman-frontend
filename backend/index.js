const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

app.use(cors({origin:true, credentials:true} ));

app.use(bodyParser.json());


const db = require("./models");
const Role = db.role;


require('./routes/auth')(app);
require('./routes/user')(app);

const exercises = require("./routes/exercises.js");
app.use("/", exercises);

const records = require("./routes/records.js");
app.use("/", records);

const workouts = require("./routes/workouts.js");
app.use("/", workouts);

app.listen(3000, () => console.log("Server Listening at 3000"));


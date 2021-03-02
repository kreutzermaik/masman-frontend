const express = require("express");
const router = express.Router();
const db = require("../lib/db.js");

const app = express();

router.get("/workouts", (req, res, next) => {
  db.query(`SELECT * FROM workouts`, (err, result) => {
    if (err) {
      throw err;
      return res.status(400).send({
        msg: err
      });
    } else {
      res.send(result);
    }
  });
});

router.post("/workouts", (req, res, next) => {
  db.query(
    `INSERT INTO workouts (id, name, reps, time) VALUES ('${req.body.id}', '${req.body.name}', '${req.body.reps}', '${req.body.time}')`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      return res.status(201).send({
        msg: "added new workout!"
      });
    }
  );
});

module.exports = router;

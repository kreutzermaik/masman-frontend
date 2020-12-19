const express = require("express");
const router = express.Router();
const db = require("../lib/db.js");

const app = express();

router.get("/records", (req, res, next) => {
  let param = req.query.username;
  db.query(`SELECT name, reps FROM records`, (err, result) => {
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

router.post("/records", (req, res, next) => {
  db.query(
    `INSERT INTO records (id, name, reps) VALUES (0, '${req.body.name}', '${req.body.reps}')`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      return res.status(201).send({
        msg: "added new record!"
      });
    }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../lib/db.js");

const app = express();

router.get("/records", (req, res, next) => {
  db.query(`select r.date, e.name, r.result, e.category 
                          from exercises e 
                          inner join records r on r.exerciseId = e.id
                          where username = '${req.query.username}'`, (err, result) => {
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

        function getExerciseId(callback) {
            db.query(`SELECT e.id FROM exercises e WHERE e.name = '${req.body.name}'`, (err, result) => {
                callback(result);
            });
        }


        getExerciseId(function(exerciseId) {
            db.query(
                `INSERT INTO records (date, name, result, exerciseId, username) 
                VALUES ('${req.body.date}', '${req.body.name}', '${req.body.result}', '${exerciseId[0].id}', '${req.body.username}')`,
                (err, result) => {
                    if (err) {
                        throw err;
                        return res.status(400).send({
                            msg: err
                        });
                    }
                    return res.status(201).send({
                        msg: 'added new record!'
                    });
                }
            );
        });
})

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const Datastore = require("nedb");

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const db = new Datastore({
    filename: "score.db",
    autoload: true
});

server.post("/api/SaveSurvivalTime", (req, res) => {

    const player = req.body.player;
    const score = Number(req.body.score);

    db.insert({
        player,
        score,
        time: new Date()
    }, (err, doc) => {

        if (err) {
            return res.status(500).json({
                success: false
            });
        }

        res.json({
            success: true,
            data: doc
        });
    });
});

// server.get("/rank", (req, res) => {

//     db.find({})
//       .sort({ score: -1 })
//       .limit(10)
//       .exec((err, docs) => {

//           if (err) {
//               return res.status(500).send("DB Error");
//           }

//           res.json(docs);
//       });
// });

server.listen(8080, () => {
    console.log("Server is running.");
});

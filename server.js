const express = require("express");
const bodyParser = require("body-parser");
const Datastore = require("@seald-io/nedb");

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const db = new Datastore({
    filename: "score.db",
    autoload: true
});

server.post("/api/SaveSurvivalTime", (req, res) => {
    console.log(req.body);

    const score = Number(req.body.score);

    db.findOne({ type: "best" }, (err, doc) => {

        if (!doc) {
            db.insert({
                type: "best",
                score
            });

            return res.json({ success: true });
        }

        if (score > doc.score) {
            db.update(
                { type: "best" },
                { $set: { score } },
                {},
                () => {
                    res.json({ success: true });
                }
            );
        } else {
            res.json({ success: true });
        }
    });
});
server.get("/api/GetSurvivalTime", (req, res) => {

    db.findOne({ type: "best" }, (err, doc) => {

        if (!doc) {
            return res.json({
                score: 0
            });
        }

        res.json({
            score: doc.score
        });
    });
});


server.listen(8080, () => {
    console.log("Server is running.");
});

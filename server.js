const express = require("express");
const bodyParser = require("body-parser");
const Datastore = require("@seald-io/nedb");

const server = express();

server.use(express.json());

// 👉 讓 GDevelop 可以被打開
server.use(express.static("public"));

const db = new Datastore({
    filename: "score.db",
    autoload: true
});
const path = require("path");

console.log(path.resolve("score.db"));
server.get("/", (req, res) => {
    res.send("API is running");
});
server.post("/api/SaveSurvivalTime", (req, res) => {
    console.log("收到 SaveSurvivalTime");
    console.log(req.body);

    const score = Number(req.body?.score);

    console.log("score =", score);
    console.log("準備查詢資料庫");
    console.log("db =", db);

    db.findOne({ type: "best" }, (err, doc) => {

    console.log("findOne doc =", doc);

    // 第一次建立紀錄
    if (!doc) {

        console.log("準備 insert");

        db.insert(
            {
                type: "best",
                score
            },
            (err, newDoc) => {
                console.log("insert err =", err);
                console.log("insert doc =", newDoc);

                res.json({ success: true });
            }
        );

        return;
    }

    console.log("目前最高分 =", doc.score);

    // 新成績比較高
    if (score > doc.score) {

        console.log("更新最高分");

        db.update(
            { type: "best" },
            { $set: { score: score } },
            {},
            (err, numUpdated) => {

                console.log("update err =", err);
                console.log("numUpdated =", numUpdated);

                res.json({ success: true });
            }
        );

    } else {

        console.log("未超過最高分");

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

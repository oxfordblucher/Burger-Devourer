const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.name, function(res) {
        console.log(req.body.name);
        res.json({id: res.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;
    console.log("condition:", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(res) {
        if(res.changedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    })
});

module.exports = router;
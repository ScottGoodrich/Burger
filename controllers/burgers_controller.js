var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbsObj = {
            burgers: data
        };
        console.log(hdbsObj);
        res.render("index", hdbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        devoured: req.params.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

module.exports = router;
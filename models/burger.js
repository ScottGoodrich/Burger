var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(cols, condition, cb) {
        orm.updateOne("burgers", cols, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;
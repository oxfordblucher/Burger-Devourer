const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    
    insertOne: function(col, name, cb) {
        orm.insertOne("burgers", col, name, function(res) {
            console.log(col),(name)
            cb(res);
        })
    },

    updateOne: function(burgVals, condition, cb) {
        orm.updateOne("burgers", burgVals, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;
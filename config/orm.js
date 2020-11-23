const connection = require("../config/connection.js");

const orm = {
    selectAll: function() {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, res) {
            if(err) throw err;
            console.log(res);
        })
    },

    insertOne: function() {
        const queryString = "INSERT SET ?? WHERE ??"
    },

    updateOne: function() {

    }
}

module.exports = orm;
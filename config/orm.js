var connection = require("./connection");


var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, results) {
            if (err) throw err;
            console.log(results);
        })
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals.toString();
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            
            cb(result);
        });
    },
    updateOne: function(table, cols, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += cols;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) throw err;

        cb(result);
        });
    }
}

module.exports = orm;
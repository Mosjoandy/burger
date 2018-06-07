var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3006,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("Your hamsters have escaped! " + err.stack);
        return;
    }
    console.log("You have sufficient hamsters! Connected as " + connection.threadId);
})

module.exports = connection;
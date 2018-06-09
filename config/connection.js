var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.log("Your hamsters have escaped! " + err.stack);
        return;
    }
    console.log("You have sufficient hamsters! Connected as " + connection.threadId);
})

module.exports = connection;
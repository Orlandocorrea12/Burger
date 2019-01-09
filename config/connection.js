// Require mysql
var mysql = require("mysql");
var connection;
// Set up our connection information
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    port: 3306,
    host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "bvoqopn77jxv2dxy",
    password: "fmf2h70ej64ze1yc",
    database: "	r3b9cpij60d7f2gz"
  })
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}


// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
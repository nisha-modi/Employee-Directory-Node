const Sequelize = require("sequelize");
const request = require('request');


const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

// Only let the user access the route if they are authenticated.
function ensureAuthenticated(req, res, next) {
  if (!req.user) {
    return res.status(401).render("unauthenticated");
  }

  next();
}

// Return a DB instance
function getDB() {
  return db;
}

function getMiyazakiMovie() {
  request.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes', function (error, response, body) {
    if (error) {
      throw err;
    }
    var quote = new String;
    quote = JSON.stringify(body);
    return quote;
  });
}



module.exports = { ensureAuthenticated, getDB, getMiyazakiMovie};
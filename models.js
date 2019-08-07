const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const Post = db.define("post", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  role: { type: Sequelize.ENUM('LACKEY', 'MANAGER', 'VP', 'CEO')},
  authorId: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING }
});

db.sync();

module.exports = { Post };
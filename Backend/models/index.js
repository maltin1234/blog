const dbConfig = require("../db/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require("./blog.model.js")(mongoose);

module.exports = db;

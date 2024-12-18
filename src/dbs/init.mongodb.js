const mongoose = require("mongoose");
// const {
//   db: { host, name, port },
// } = require("../configs/config.mongodb");

const { countConnect } = require("../helpers/check.connect");
const connectString = `mongodb://localhost:27017/shopDEV`;

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => console.log(`Conntecd Mongodb Success PRO`, countConnect()))
      .catch((err) => console.log("Error Connenct"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;

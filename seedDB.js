const mongoose = require("mongoose");
const db = require("./models");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/trello-clone");

const userSeed = [
  {
    name: {
      first: "Trevor",
      last: "Meadows"
    },
    boards: []
  },
  {
    name: {
      first: "Jack",
      last: "Peanut"
    },
    boards: []
  },
  {
    name: {
      first: "Mug",
      last: "O'Coffee"
    },
    boards: []
  },
  {
    name: {
      first: "React",
      last: "Redux"
    },
    boards: []
  },
  {
    name: {
      first: "Sunny",
      last: "Brightside"
    },
    boards: []
  },
  {
    name: {
      first: "Lauren",
      last: "McAndrew"
    },
    boards: []
  },
  {
    name: {
      first: "Johnny",
      last: "Boi"
    },
    boards: []
  }
];

db.User.remove({}).then(db.User.create(userSeed));

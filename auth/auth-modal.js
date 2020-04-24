const db = require("../database/dbConfig");

module.exports = {
  find,
  insert,
  findById,
  insertWasher,
  findWasherId,
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .then(([user]) => user);
}

function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => id);
}

function insertWasher(washer) {
  return db("washers")
    .insert(washer, "washerId")
    .then(([id]) => id);
}

function findWasherId(userId) {
  return db("washers")
    .where({ userId })
    .then(([washer]) => washer);
}

const db = require("../database/dbConfig");

module.exports = {
  del,
  find,
  findById,
  update,
  updateWasher,
  findByWasherId,
  getUserCars,
};

function find() {
  return db("users").select("*");
}

function findById(id) {
  return db("users").where({ id }).first();
}

function del(id) {
  return db("users").where({ id }).del();
}

function update(id, changes) {
  return db("users").where({ id }).update(changes, "*");
}
function findByWasherId(washerId) {
  return db("washers").where({ washerId }).first();
}
async function updateWasher(washerId, changes) {
  const [updatedWasher] = await db("washers")
    .where({ washerId })
    .update(changes, "*");
  return updatedWasher;
}

function getUserCars(id) {
  return db("cars").where({ clientId: id });
}

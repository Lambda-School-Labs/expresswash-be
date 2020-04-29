const mockDb = require("mock-knex");
const knex = require("knex")({ client: "pg" });
const model = require("./users-model");
mockDb.mock(knex);

test("testing users model find", async () => {
  const res = await model.find();
  expect(res).toHaveLength(1);
});

test("testing users model find by id", async () => {
  const res = await model.findById(1);
  expect(res).toHaveProperty("id");
});

test("testing users model delete", async () => {
  const res = await model.del(1);
  expect(res).toHaveLength(1);
});

test("testing users model update", async () => {
  const res = await model.update(1, { name: "tom" });
  expect(res).toHaveLength(1);
});

// tracker for incoming sql queries and sets response
const tracker = require("mock-knex").getTracker();
tracker.install();
tracker.on("query", (query) => {
  query.response([
    {
      id: 1,
      name: "denton",
      email: "denton@email.com",
    },
  ]);
});
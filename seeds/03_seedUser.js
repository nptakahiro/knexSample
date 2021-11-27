exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex("user").insert([
    { auth: 1, name: "aaa" },
    { auth: 2, name: "bbb" },
    { auth: 3, name: "ccc" },
  ]);
};

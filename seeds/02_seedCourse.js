exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("course").insert([
    { id: 1, name: "aPlan" },
    { id: 2, name: "bPlan" },
    { id: 3, name: "cPlan" },
    { id: 4, name: "dPlan" },
  ]);
};

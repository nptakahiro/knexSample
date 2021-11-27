exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex("achievement").insert([
    { authId: 1, courseId: 1 },
    { authId: 1, courseId: 2 },
    { authId: 2, courseId: 1 }
  ]);
};

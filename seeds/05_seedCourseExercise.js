exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex("courseExercise").insert([
    { courseId: 1, exerciseId: 1, order: 1 },
    { courseId: 1, exerciseId: 2, order: 2 },
    { courseId: 1, exerciseId: 3, order: 3 },
    { courseId: 1, exerciseId: 4, order: 4 },
    { courseId: 1, exerciseId: 5, order: 5 },
    { courseId: 2, exerciseId: 6, order: 1 },
    { courseId: 2, exerciseId: 7, order: 2 },
    { courseId: 2, exerciseId: 8, order: 3 },
    { courseId: 2, exerciseId: 9, order: 4 },
    { courseId: 2, exerciseId: 10, order: 5 },
  ]);
};

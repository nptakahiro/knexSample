exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("achievement")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("achievement").insert([
        {id:1, userId:1,courseId:1},
        {id:2, userId:1,courseId:2},
        {id:3, userId:2,courseId:1}
      ]);
    });
};

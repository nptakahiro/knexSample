exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("course")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("course").insert([
        {id:1,order:1, exerciseId:1},
        {id:1,order:2, exerciseId:2},
        {id:1,order:3, exerciseId:3},
        {id:1,order:4, exerciseId:4},
        {id:1,order:5, exerciseId:5},
        {id:2,order:1, exerciseId:1},
        {id:2,order:2, exerciseId:2},
        {id:2,order:3, exerciseId:3},
        {id:2,order:4, exerciseId:4},
        {id:2,order:5, exerciseId:5},
      ]);
    });
};

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("user")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("user").insert([
          {auth:1,name:"aaa"},
          {auth:2,name:"aaa"},
          {auth:3,name:"aaa"},
        ]);
      });
  };
  
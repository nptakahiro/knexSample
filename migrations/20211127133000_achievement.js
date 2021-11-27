exports.up = async function(knex) {
    return knex.schema.createTable("achievement", (t) => {
        t.increments() // auto-incrementing id column
          .index(); // index this column
          
        t.string("authId") // ユーザとの紐付け
          .references("auth")
          .inTable("user");
    
        t.integer("courseId") // コースとの紐付け
          .references("id")
          .inTable("course");
      });
  };
  
  //ロールバック用
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("achievement");
  };
  
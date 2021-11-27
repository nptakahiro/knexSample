exports.up = async function(knex) {
    await knex.schema.createTable("courseExercise", t => {
        t.integer("courseId")
        .references("id")
        .inTable("course");
        t.integer("exerciseId")
        .references("id")
        .inTable("exercise");
        t.integer("order");
        t.primary(["courseId", "exerciseId"]);
    });
  };
  
  //ロールバック用
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("courseExercise");
    await knex.schema.dropTableIfExists("achievement");
    await knex.schema.dropTableIfExists("course");
    await knex.schema.dropTableIfExists("user");
    await knex.schema.dropTableIfExists("exercise");
  };
  
exports.up = async function(knex) {
    await knex.schema.createTable("course", t => {
        t.integer("id").primary();
        t.string("order");
        t.integer("exerciseId")
        .references("id")
        .inTable("exercise");
    });
  };
  
  //ロールバック用
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("course");
  };
  
exports.up = async function(knex) {
    await knex.schema.createTable("user", t => {
        t.string("auth").primary();
        t.string("name");
    });
  };
  
  //ロールバック用
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("user");
  };
  
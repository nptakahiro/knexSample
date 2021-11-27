
exports.up = function(knex, Promise) {
    return knex.schema.createTable("exercise", (t) => {
        t.increments() // auto-incrementing id column
          .index();
    
        t.string("name", 40) // エクササイズネーム
          .notNullable();
    
        t.string("genre", 20) // ジャンル
          .notNullable();
    
        t.string("imgSrc", 20) // gif
          .notNullable();
    
        t.string("numCount", 20) // カウント数
    
        t.string("numSet", 20) // セット数
          .notNullable();
    
        t.string("description", 200) // 説明
    
      });
};

  //ロールバック用
  exports.down = async function(knex) {
    // await knex.schema.dropTableIfExists("exercise");
  };

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("exercise")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("exercise").insert([
        { id: 1, name:"ダイナミックツイスト", genre:"ストレッチ",imgSrc:"s3//xxx.png",numCount:6,numSet:1,description:null},
        { id: 2, name:"腰ストレッチ", genre:"ストレッチ",imgSrc:"s3//xxx.png",numCount:null,numSet:1,description:"両手をまっすぐ伸ばしましょう"},
      ]);
    });
};

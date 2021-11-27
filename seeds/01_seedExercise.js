exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex("exercise").insert([
    { id: 1, name: "ダイナミックツイスト", genre: "ストレッチ", imgSrc: "s3//xxx.png", numCount: 6, numSet: 1, description: null },
    { id: 2, name: "腰ストレッチ", genre: "ストレッチ", imgSrc: "s3//xxx.png", numCount: null, numSet: 1, description: "両手をまっすぐ伸ばしましょう" },
    { id: 3, name: "パワーレイズ", genre: "筋トレ", imgSrc: "s3//xxx.png", numCount: 10, numSet: 3, description: null },
    { id: 4, name: "チェストプレス", genre: "筋トレ", imgSrc: "s3//xxx.png", numCount: 10, numSet: 3, description: null },
    { id: 5, name: "フレンチプレス", genre: "筋トレ", imgSrc: "s3//xxx.png", numCount: 10, numSet: 3, description: null },
    { id: 6, name: "ダイナミックツイスト", genre: "ストレッチ", imgSrc: "s3//xxx.png", numCount: 6, numSet: 1, description: null },
    { id: 7, name: "腰ストレッチ", genre: "ストレッチ", imgSrc: "s3//xxx.png", numCount: null, numSet: 1, description: "両手をまっすぐ伸ばしましょう" },
    { id: 8, name: "パワーレイズ", genre: "筋トレ", imgSrc: "s3//xxx.png", numCount: 10, numSet: 3, description: null },
    { id: 9, name: "チェストプレス", genre: "筋トレ", imgSrc: "s3//xxx.png", numCount: 10, numSet: 3, description: null },
    { id: 10, name: "フレンチプレス", genre: "筋トレ", imgSrc: "s3//xxx.png", numCount: 10, numSet: 3, description: null },
  ]);
};

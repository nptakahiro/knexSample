# kenx練習用リポジトリ

ターミナルでDB作成：
```
createdb PairTre
```

(オプション)knexfile.js の作成：
```bash
  npm run init
```
config.js に設定で必要な情報を埋めるため、下記の.env の[YOUR ***]を埋める。

```
[DB_INFO]
DB_HOST=[YOUR HOST]
DB_PORT=[YOUR PORT]
DB_NAME=PairTre
DB_USER=[YOUR PORT]
DB_PASSWORD=[YOUR PORT]
PORT=[YOUR PORT]
```

(オプション)migrationファイルのテーブル作成：
```
npm run makeMigration tableName
```
今回はuser, course, achievement, Exerciseを作成。

migrationの実行：
```
npm run migrate
```

(オプション)seedファイルの作成：
```bash
  npm run makeSeed
```

seedファイルから初期データ作成：

```bash
npm run seed
```

knexのサンプルコード実行：
```bash
node index.js
```

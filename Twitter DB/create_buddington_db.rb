require 'sqlite3'

db = SQLite3::Database.new("buddington.db")

sql = <<SQL
  create table mentions(
    id integer PRIMARY KEY,
    tweet_id integer,
    user varchar2(255),
    FOREIGN KEY(tweet_id) REFERENCES tweet(id)
    );
SQL

db.execute_batch(sql)
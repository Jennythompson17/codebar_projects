require 'sqlite3'

db = SQLite3::Database.new("Tweet_Data.db")

sql = <<SQL
  create table tweet_text_table (
    id integer PRIMARY KEY,
    text varchar2(255),
    created_at varchar2(255),
    ref_id integer UNIQUE
    );

SQL

db.execute_batch(sql)
require 'sqlite3'

db = SQLite3::Database.new("Tweet_Data.db")

sql = <<SQL
  create table Tweet_Text (
    id integer PRIMARY KEY,
    text varchar2(255),
    ref_id integer UNIQUE
    );

  create table tweet (
    id integer PRIMARY KEY,
    text varchar2(255)
    );
 
  create table mentions(
    id integer PRIMARY KEY,
    tweet_id integer,
    user varchar2(255),
    FOREIGN KEY(tweet_id) REFERENCES tweet(id)
    );
 
  create table hashtags(
    id integer PRIMARY KEY,
    tweet_id integer,
    hashtags varchar2(255),
    FOREIGN KEY(tweet_id) REFERENCES tweet(id)
    );
 
    create table media_urls(
    id integer PRIMARY KEY,
    tweet_id integer,
    media varchar2(255),
    FOREIGN KEY(tweet_id) REFERENCES tweet(id)
    );
SQL

db.execute_batch(sql)
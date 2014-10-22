require 'sqlite3'

db = SQLite3::Database.new("Tweet_Data.db")

sql = <<SQL
  alter table Tweet_Text (
    add column created_at varchar2(255),
    );

SQL

db.execute_batch(sql)
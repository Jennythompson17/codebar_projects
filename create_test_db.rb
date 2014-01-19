require 'sqlite3'

db = SQLite3::Database.new("test.db")

sql = <<SQL
	create table test1 (
		id integer PRIMARY KEY,
		text varchar2(255)
		);
SQL

db.execute_batch(sql)
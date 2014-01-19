require 'sqlite3'

db = SQLite3::Database.new("twitter_project.db")

sql = <<SQL
	create table tweet (
		id integer PRIMARY KEY,
		text varchar2(255)
		);
SQL

db.execute_batch(sql)
require "sqlite3"

begin

# Open a database
db = SQLite3::Database.open "test.db"

# Execute an insert
  db.execute "CREATE TABLE IF NOT EXISTS cars (ID INTEGER PRIMARKY KEY, Name Text, Price INT)"
  db.execute "INSERT INTO cars VALUES(1, 'Lotus',52642 )"

end
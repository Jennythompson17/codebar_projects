require "sqlite3"

begin

# Open a database
db = SQLite3::Database.open "test.db"

# Execute more inserts
  
  db.execute "INSERT INTO cars VALUES(2, 'Porche',60000 )"
  db.execute "INSERT INTO cars VALUES(3, 'Seat',50000 )"

end
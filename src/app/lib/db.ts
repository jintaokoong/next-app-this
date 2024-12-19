import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(
  "./store.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        done BOOLEAN NOT NULL DEFAULT 0
      )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("initialized items table");
    }
  );
});

export default db;
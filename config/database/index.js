const { Pool } = require("pg");
const tableCreationQueries = require("./queries/table-creation");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false },
});

Promise.all(
  tableCreationQueries.map((createTableQuery) => pool.query(createTableQuery))
)
  .then(() => {
    console.log("All tables created");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { pool };

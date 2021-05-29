if(process.env.NODE_ENV !== "production") require('dotenv/config')

const pg = require('pg');
const util = require('util');
const db = {};
const pool = new pg.Pool(process.env.DATABASE_URL);
db.exec = async (sql, values) => {
  const conn = pool.connect((err, client, done) => {
    if (err) {
      console.log(e);
    }
  });
  const query = util.promisify(conn.query).bind(conn);
  try {
    const rows = await query(sql, values);
    return rows;
  }
  catch(e){
    console.log(e)
    return []
  } finally {
    conn.end();
  }
};

module.exports = db
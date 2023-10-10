/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'better-sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    useNullAsDefault: true
  }
};

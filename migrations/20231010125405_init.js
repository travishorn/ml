/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable('Label', (table) => {
      table.uuid('id').notNullable();
      table.boolean('enabled').notNullable().defaultTo(true);
      table.string('title').notNullable();
      table.primary('id');
    })
    .createTable('Drawing', (table) => {
      table.uuid('id').notNullable();
      table.datetime('addedOn').notNullable().defaultTo(knex.fn.now());
      table.boolean('ignore').notNullable().defaultTo(false);
      table.string('labelId').notNullable();
      table.json('paths').notNullable().defaultTo([]);
      table.primary('id');
      table.foreign('labelId').references('id').on('Label');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema
    .dropTable('Drawing')
    .dropTable('Label');
};

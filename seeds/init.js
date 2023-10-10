import { randomUUID } from 'node:crypto';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Label').del()
  await knex('Label').insert([
    { id: randomUUID(), title: 'car' },
    { id: randomUUID(), title: 'fish' },
    { id: randomUUID(), title: 'house' },
    { id: randomUUID(), title: 'tree' },
    { id: randomUUID(), title: 'bicycle' },
    { id: randomUUID(), title: 'guitar' },
    { id: randomUUID(), title: 'pencil' },
    { id: randomUUID(), title: 'clock' }
  ]);
};

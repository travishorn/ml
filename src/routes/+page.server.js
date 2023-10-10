import { db } from '$lib/server/database.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const labels = await db.raw(`SELECT * FROM Label WHERE enabled = 1`);

  return {
    labels
  };
}
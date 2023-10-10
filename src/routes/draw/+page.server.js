import { db } from '$lib/server/database.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const labels = await db.raw(`
    SELECT    l.id,
              l.title
    FROM      Label l
    WHERE     l.enabled = 1
  `);

  const randomLabel = labels[Math.floor(Math.random() * labels.length)];

  return {
    label: randomLabel
  };
}
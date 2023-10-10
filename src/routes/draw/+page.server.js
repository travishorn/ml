import { randomUUID } from 'node:crypto';
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

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    await db.raw(`
      INSERT INTO Drawing (
        id,
        labelId,
        paths
      ) VALUES (
        :id,
        :labelId,
        :paths
      )
    `, {
      id: randomUUID(),
      labelId: data.get('labelId'),
      paths: data.get('paths')
    });

    return { success: true };
  }
};
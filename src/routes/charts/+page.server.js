import { db } from '$lib/server/database.js';
import { getWidth, getHeight } from '$lib/util.js';
import { capitalizeFirstLetter } from '$lib/util.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const drawings = await db.raw(`
    SELECT    d.id,
              d.paths,
              l.title
    FROM      Drawing d
    JOIN      Label l
    ON        l.id = d.labelId
    WHERE     d.ignore = 0
  `);

  const withFeatures = drawings.map((drawing) => {
    const paths = JSON.parse(drawing.paths);

    return {
      id: drawing.id,
      label: capitalizeFirstLetter(drawing.title),
      width: getWidth(paths),
      height: getHeight(paths)
    };
  });

  return {
    drawings: withFeatures
  };
}

import { createCanvas } from 'canvas';
import { groupBy } from 'lodash';
import { db } from '$lib/server/database.js';

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

  const parsedDrawings = drawings.map((drawing) => {
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    JSON.parse(drawing.paths).forEach((path) => {
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(...path[0]);
      for (let i = 1; i < path.length; i += 1) {
        ctx.lineTo(...path[i]);
      }
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    });

    return {
      id: drawing.id,
      title: drawing.title,
      imgData: canvas.toDataURL()
    }
  });

  const groupedDrawings = groupBy(parsedDrawings, "title");

  return {
    drawings: groupedDrawings
  };
}

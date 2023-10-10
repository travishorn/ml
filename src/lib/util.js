/**
 * @param {String} str 
 * @returns String
 */
export const capitalizeFirstLetter = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }

  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

/**
 * @param {Array<Array<Number>>} paths 
 * @returns {Number}
 */
export const getWidth = (paths) => {
  const points = paths.flat();
  const x = points.map(p => p[0]);
  const min = Math.min(...x);
  const max = Math.max(...x);
  return max - min;
};

/**
 * @param {Array<Array<Number>>} paths 
 * @returns {Number}
 */
export const getHeight = (paths) => {
  const points = paths.flat();
  const y = points.map(p => p[1]);
  const min = Math.min(...y);
  const max = Math.max(...y);
  return max - min;
};

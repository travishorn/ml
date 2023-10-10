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
 * @param {String} dimension
 * @returns {Number}
 */
export const measure = (paths, dimension) => {
  const i = dimension === "width" ? 0 : 1;
  const coordinate = paths.flat().map(p => p[i]);
  return Math.max(...coordinate) - Math.min(...coordinate);
};

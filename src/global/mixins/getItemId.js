/**
 * Finds the id property of an item and returns it.
 * @param {object} item
 * @returns {string | number}
 */
export function getItemId(item) {
  let keys = Object.keys(item);
  let idKey = keys.find(id => id.toLowerCase() === 'id' || id.toLowerCase() === '_id');

  if (idKey != null) {
    return item[idKey].value;
  }

  // return random negative whole number
  return Math.round(-Math.random() * 100);
}
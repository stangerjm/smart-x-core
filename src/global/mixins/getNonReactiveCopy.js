/**
 * Returns a non-reactive copy of the passed in object
 * @param originalObj
 * @returns {*}
 */
export function getNonReactiveCopy(originalObj) {
  if (!isObject(originalObj) || Array.isArray(originalObj)) {
    return originalObj;
  }

  let copy = {};
  let entries = Object.entries(originalObj);

  entries.forEach(function([prop, attribute]) {
    copy[prop] = {
      type: attribute.type,
      value: attribute.value
    }
  });

  return copy;
}
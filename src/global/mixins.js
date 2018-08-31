/**
 * Parses a JSON date into a new Date object.
 * @param date
 * @returns {*}
 */
export function parseJsonDate(date) {
  let dateRegex = /\/Date\((\d+)(?:-\d+)?\)\//i;
  if (date === '/Date(-62135568000000)/') {
    return new Date('1/1/0001');
  } else if (dateRegex.test(date)) {
    return new Date(parseInt(dateRegex.exec(date)[1], 10));
  } else {
    return null;
  }
}

/**
 * Separates a camel case string into words separated by a space and capitalizes each letter
 * @param text
 * @returns {string}
 */
export function formatFromCamelCase(text) {
    return text
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (substr) => { return substr.toUpperCase(); });
}

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

/**
 * Takes in an object and returns a typed schema based on the values
 * @param schema
 * @returns {object}
 */
export function createSchema(schema) {
  let entries = Object.entries(schema);

  return entries.reduce(gatherIntoSchemaObject, {});
}

function gatherIntoSchemaObject(accumulatorObj, [key, value]) {
  if (value === null || key === '__v') {
    // ignore null values and unwanted keys
    return accumulatorObj;
  }

  if (isObject(value)) {
    return {
      ...accumulatorObj,
      [key]: Object.entries(value).reduce(gatherIntoSchemaObject, {})
    }
  }
  else if (typeof value === 'function') {
    return {
      ...accumulatorObj,
      [key]: {
        type: value.name,
        value: getDefaultValue(value)
      }
    };
  }
  else {
    return {
      ...accumulatorObj,
      [key]: {
        type: getType(value),
        value: value
      }
    };
  }
}

function getType(value) {
  return Object.getPrototypeOf(Object(value)).constructor.name;
}

function getDefaultValue(type) {
  switch(type) {
    case Number:
      return null;
    case String:
      return '';
    case Date:
      return new Date();
    case Object:
      return {};
    case Boolean:
      return false;
    case Array:
      return []
  }
}

function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}
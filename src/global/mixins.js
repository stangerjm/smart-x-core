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

  return entries.reduce(getSchemaReductor(), {});
}

/**
 * Returns a reducing function that will reduce an array of object entries into a typed schema object.
 * @returns {function}
 */
function getSchemaReductor() {
  /**
   * Reverts the passed in object to an untyped model
   * @param obj
   * @returns {object}
   */
  function revert(obj) {
    return Object.entries(obj).reduce(revertObjectToUntypedModel, {});
  }

  /**
   * Reducing function. Creates a new object with only the value from a typed schema.
   * @param accumulatorObj
   * @param key
   * @param value
   * @returns {object}
   */
  function revertObjectToUntypedModel(accumulatorObj, [key, value]) {
    if (value.type || value.value != null) {
      return {
        ...accumulatorObj,
        [key]: value.value
      }
    } else {
      return {
        ...accumulatorObj,
        [key]: Object.entries(value).reduce(revertObjectToUntypedModel, {})
      }
    }
  }

  /**
   * Defines an 'untypedObject' property on the passed in object which will get the untyped version of the object
   * @param obj
   * @returns {object}
   */
  function getRevertableObject(obj) {
    return Object.defineProperty(obj, 'untypedObject', {
      enumerable: false,
      get() {
        return revert(obj)
      }
    });
  }

  /**
   * Reducing function. Returns a new object with the type and value of the value passed in.
   * @param accumulatorObj
   * @param key
   * @param value
   * @returns {object}
   */
  function gatherIntoSchemaObject(accumulatorObj, [key, value]) {
    if (value == null || key === '__v') {
      // ignore null values and unwanted keys
      return accumulatorObj;
    }

    if (isObject(value)) {
      return getRevertableObject({
        ...accumulatorObj,
        [key]: Object.entries(value).reduce(gatherIntoSchemaObject, {})
      });
    }
    else if (typeof value === 'function') {
      return getRevertableObject({
        ...accumulatorObj,
        [key]: {
          type: value.name,
          value: getDefaultValue(value)
        }
      });
    }
    else {
      return getRevertableObject({
        ...accumulatorObj,
        [key]: {
          type: getType(value),
          value: value
        }
      });
    }
  }

  return gatherIntoSchemaObject;
}

/**
 * Returns the name of the type of the value passed in.
 * @param value
 * @returns {string}
 */
function getType(value) {
  return Object.getPrototypeOf(Object(value)).constructor.name;
}

/**
 * Gets the default value for the type passed in.
 * @param type
 * @returns {*}
 */
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

/**
 * Determines if the value passed in is an object.
 * @param value
 * @returns {boolean}
 */
function isObject(value) {
  if (!value) {
    return false;
  }

  return typeof value === 'object' && value.constructor === Object;
}
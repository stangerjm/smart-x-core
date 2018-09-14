/**
 * Parses a JSON date into a new Date object.
 * @param date
 * @returns {*}
 */
export function parseJsonDate(date) {
  if (typeof date === typeof new Date()) {
    return date;
  }

  let dateRegex = /\/Date\((\d+)(?:-\d+)?\)\//i;
  if (date === '/Date(-62135568000000)/') {
    return new Date('1/1/0001');
  } else if (dateRegex.test(date)) {
    return new Date(
      parseInt(
        dateRegex.exec(date)[1], 10
      )
    );
  } else if(typeof date !== 'number' && typeof date !== 'boolean' && new Date(date).toString() !== 'Invalid Date') {
    return new Date(date);
  } else {
    return null;
  }
}
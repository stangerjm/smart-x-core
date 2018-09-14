/**
 * Separates a camel case string into words separated by a space and capitalizes each letter
 * @param text
 * @returns {string}
 */
export function toTitleCase(text) {
  return text
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (substr) => { return substr.toUpperCase(); });
}
export function toPascalCase(str: string) {
  return str.replace(/(^|_|\s|-)(\w)/g, (_: any, __: any, letter: string) => letter.toUpperCase()).replace(/[_\s-]/g, '');
}

export function toCamelCase(key: string) {
  return key
      // First, remove all leading non-alphabet characters
      .replace(/^[^a-zA-Z]+/, '')
      // Convert what follows a separator into upper case
      .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
      // Ensure the first character of the result is always lowercase
      .replace(/^./, (c) => c.toLowerCase());
}

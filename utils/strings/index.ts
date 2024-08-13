export function replaceSpacesWithHyphens(str: string): string {
  return str.replace(/ /g, '-')
}
export function replaceHyphensWithSpaces(str: string): string {
  return str.replace(/-/g, ' ')
}

export function getSubstringBeforeFirstHyphen(str: string): string {
  const hyphenIndex = str.indexOf('-')
  if (hyphenIndex === -1) {
    return str // Return the whole string if no hyphen is found
  }
  return str.substring(0, hyphenIndex)
}

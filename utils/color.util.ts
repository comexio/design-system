import { String2HexCodeColor } from 'string-to-hex-code-color'

export function stringColorToRGBA (color: string, colorRelation = {}, alpha: Number | null = null) {
  const regexp = /^#(?:[0-9a-fA-F]{3}){1,2}$/
  const regexTest = regexp.test(color)

  if (!regexTest) {
    // @ts-ignore
    const hex = colorRelation[color]
    if (!hex) {
      return color
    }

    color = hex
  }

  const red = parseInt(color.slice(1, 3), 16)
  const green = parseInt(color.slice(3, 5), 16)
  const blue = parseInt(color.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  }

  return `rgb(${red}, ${green}, ${blue})`
}

export function generateHexColorByString(string: string) {
  const string2HexCodeColor = new String2HexCodeColor()
  return string2HexCodeColor.stringToColor(string, -0.2)
}

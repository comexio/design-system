import isNil from 'ramda/src/isNil'
import equals from 'ramda/src/equals'

export function slugify (string: string) {
  string = string.replace(/^\s+|\s+$/g, '')
  string = string.toLowerCase()

  const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  string = string.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return string
}

export function formatObjectClassToString (classes: Record<string, unknown>): string {
  return Object.keys(classes)
    .filter(className => !isNil(classes[className]) && !equals(classes[className], false) && !equals(classes[className], ''))
    .join(' ')
}

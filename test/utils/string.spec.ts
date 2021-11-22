import { slugify, formatObjectClassToString } from '~/utils/string.util'

describe('String utils', () => {
  it('should test returns from slugify function', () => {
    const string = 'My String Slug'
    const sluggedString = slugify(string)
    expect(sluggedString).toEqual('my-string-slug')
  })

  it('formatObjectClassToString return only truthy classes', () => {
    const classes = {
      'LTooltip LTooltip--pointer': true,
      'LTooltip--pointer-left': undefined,
      'LTooltip--pointer-right': '',
      'LTooltip--pointer-top': false,
      'LTooltip--pointer-bottom': true
    }
    const classesString = formatObjectClassToString(classes)

    expect(classesString).toBe('LTooltip LTooltip--pointer LTooltip--pointer-bottom')
  })

  it('formatObjectClassToString return empty string', () => {
    const classes = {
      'LTooltip LTooltip--pointer': false,
      'LTooltip--pointer-left': undefined,
      'LTooltip--pointer-right': '',
      'LTooltip--pointer-top': null,
      'LTooltip--pointer-bottom': false
    }
    const classesString = formatObjectClassToString(classes)

    expect(classesString).toBe('')
  })
})

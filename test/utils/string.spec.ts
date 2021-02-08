import { slugify } from '~/utils/string.util'

describe('String utils', () => {
  it('should test returns from slugify function', () => {
    const string = 'My String Slug'
    const sluggedString = slugify(string)
    expect(sluggedString).toEqual('my-string-slug')
  })
})

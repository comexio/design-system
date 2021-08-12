import { getInputHeight } from '~/utils/size.util'

describe('Size utils', () => {
  it('returns large size', () => {
    const large = true
    const result = getInputHeight({ large })

    expect(result).toBe('40')
  })

  it('returns small size', () => {
    const small = true
    const result = getInputHeight({ small })

    expect(result).toBe('25')
  })

  it('returns custom size', () => {
    const $attrs = { height: '37' }
    const result = getInputHeight({ custom: $attrs.height })

    expect(result).toBe('37')
  })

  it('returns default size', () => {
    const result = getInputHeight({})

    expect(result).toBe('35')
  })
})

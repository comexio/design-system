import { getInputHeight, getButtonHeight } from '~/utils/size.util'

describe('Size utils', () => {
  it('returns large size', () => {
    const large = true

    const inputHeight = getInputHeight({ large })
    const buttonHeight = getButtonHeight({ large })

    expect(inputHeight).toBe('40')
    expect(buttonHeight).toBe('45')
  })

  it('returns small size', () => {
    const small = true

    const inputHeight = getInputHeight({ small })
    const buttonHeight = getButtonHeight({ small })

    expect(inputHeight).toBe('25')
    expect(buttonHeight).toBe('35')
  })

  it('returns custom size', () => {
    const $attrs = { height: '37' }
    
    const inputHeight = getInputHeight({ custom: $attrs.height })
    const buttonHeight = getButtonHeight({ custom: $attrs.height })

    expect(inputHeight).toBe('37')
    expect(buttonHeight).toBe('37')
  })

  it('returns default size', () => {
    const inputHeight = getInputHeight({})
    const buttonHeight = getButtonHeight({})

    expect(inputHeight).toBe('35')
    expect(buttonHeight).toBe('40')
  })
})

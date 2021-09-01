import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/buttons/LButtonNew.stories'

const { 
    PrimaryDefault, 
    PrimaryGray, 
    PrimaryDisabled, 
    SecondaryDefault, 
    SecondaryGray, 
    SecondaryDisabled,
    TertiaryDefault, 
    TertiaryGray, 
    TertiaryDisabled,
    PrimaryPurple,
    PrimaryPurpleDisabled,
    OnlyIcon,
    OnlyIconDisabled,
    WithIcon,
    WithIconDisabled
} = composeStories(stories)

const checkButtonClasses = (button: Element, classes: Array<String>) => {
    classes.forEach((c) => expect(button).toHaveClass(`LButton--${c}`))
}

describe('LButtonNew', () => {
  it('renders primary button without uppercase', () => {
    renderComponent(PrimaryDefault())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['primary'])
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toHaveTextContent('Button')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders primary button with gray style', () => {
    renderComponent(PrimaryGray())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['primary', 'gray'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders primary button disabled', () => {
    renderComponent(PrimaryDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['primary', 'disabled'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders secondary button without uppercase', () => {
    renderComponent(SecondaryDefault())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['secondary'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders secondary button with gray style', () => {
    renderComponent(SecondaryGray())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['secondary', 'gray'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders secondary button disabled', () => {
    renderComponent(SecondaryDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['secondary', 'disabled'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders tertiary button', () => {
    renderComponent(TertiaryDefault())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['tertiary'])
        expect(button).toHaveTextContent('Button')
        expect(button).not.toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders tertiary button with gray style', () => {
    renderComponent(TertiaryGray())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['tertiary', 'gray'])
        expect(button).toHaveTextContent('Button')
        expect(button).not.toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders tertiary button disabled', () => {
    renderComponent(TertiaryDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['tertiary', 'disabled'])
        expect(button).toHaveTextContent('Button')
        expect(button).not.toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders purple button', () => {
    renderComponent(PrimaryPurple())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['purple'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders purple button disabled', () => {
    renderComponent(PrimaryPurpleDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['purple', 'disabled'])
        expect(button).toHaveTextContent('Button')
        expect(button).toHaveClass('LButton__label--withoutUppercase')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders only icon button', () => {
    renderComponent(OnlyIcon())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['icon', 'purple'])
    expect(button).toBeEnabled()    
  })

  it('renders only icon button disabled', () => {
    renderComponent(OnlyIconDisabled())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['icon', 'purple', 'disabled'])
    expect(button).toBeDisabled()    
  })

  it('renders with icon button', () => {
    renderComponent(WithIcon())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['purple'])
    expect(button).toHaveClass('LButton__label--withoutUppercase')
    expect(button).toHaveTextContent('Button')
    expect(button).toBeEnabled()    
  })

  it('renders with icon button disabled', () => {
    renderComponent(WithIconDisabled())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['purple'])
    expect(button).toHaveClass('LButton__label--withoutUppercase')
    expect(button).toHaveTextContent('Button')
    expect(button).toBeDisabled()    
  })
})

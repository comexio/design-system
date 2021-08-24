import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/buttons/LButtonNew.stories'

const { 
    Primary, 
    PrimaryCancel, 
    PrimaryDisabled, 
    Secondary, 
    SecondaryCancel, 
    SecondaryDisabled,
    Tertiary, 
    TertiaryCancel, 
    TertiaryDisabled,
    Purple,
    PurpleDisabled,
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
    renderComponent(Primary())

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

  it('renders primary button with cancel style', () => {
    renderComponent(PrimaryCancel())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['primary', 'cancel'])
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
    renderComponent(Secondary())

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

  it('renders secondary button with cancel style', () => {
    renderComponent(SecondaryCancel())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['secondary', 'cancel'])
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
    renderComponent(Tertiary())

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

  it('renders tertiary button with cancel style', () => {
    renderComponent(TertiaryCancel())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['tertiary', 'cancel'])
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
    renderComponent(Purple())

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
    renderComponent(PurpleDisabled())

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

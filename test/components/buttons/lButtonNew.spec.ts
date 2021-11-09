import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/buttons/LButtonNew.stories'

const { 
    Primary, 
    PrimaryDisabled, 
    Secondary, 
    SecondaryDisabled,
    Tertiary, 
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
  it('renders primary button', () => {
    renderComponent(Primary())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['primary', 'withoutUppercase'])
        expect(button).toHaveTextContent('Button')
        expect(button).toBeEnabled() 
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders primary button disabled', () => {
    renderComponent(PrimaryDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['primary', 'withoutUppercase'])
        expect(button).toHaveTextContent('Button')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders secondary button', () => {
    renderComponent(Secondary())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['secondary', 'withoutUppercase'])
        expect(button).toHaveTextContent('Button')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders secondary button disabled', () => {
    renderComponent(SecondaryDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['secondary', 'withoutUppercase'])
        expect(button).toHaveTextContent('Button')
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
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders tertiary button disabled', () => {
    renderComponent(TertiaryDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['tertiary'])
        expect(button).toHaveTextContent('Button')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders button with custom colors (purple)', () => {
    renderComponent(Purple())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['customColors', 'withoutUppercase'])
        expect(button).toHaveTextContent('Button')
        expect(button).toBeEnabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders button with custom colors disabled (purple)', () => {
    renderComponent(PurpleDisabled())

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
        checkButtonClasses(button, ['customColors', 'withoutUppercase'])
        expect(button).toHaveTextContent('Button')
        expect(button).toBeDisabled()    
    })

    expect(buttons[0]).toHaveClass('LButton--large')
    expect(buttons[2]).toHaveClass('LButton--small')
  })

  it('renders rounded icon button with custom colors (purple)', () => {
    renderComponent(OnlyIcon())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['customColors', 'roundedIcon'])
    expect(button).toBeEnabled()    
  })

  it('renders rounded icon button with custom colors disabled (purple)', () => {
    renderComponent(OnlyIconDisabled())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['customColors', 'roundedIcon'])
    expect(button).toBeDisabled()    
  })

  it('renders button with icon in slot and custom colors (purple)', () => {
    const { container } = renderComponent(WithIcon())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['customColors', 'withoutUppercase'])
    expect(button).toHaveTextContent('Button')
    expect(button).toBeEnabled()    
    expect(container.querySelector('.v-icon--left')).toBeInTheDocument()
  })

  it('renders button with icon in slot, custom colors and disabled (purple)', () => {
    const { container } = renderComponent(WithIconDisabled())

    const button = screen.getByRole('button')

    checkButtonClasses(button, ['customColors', 'withoutUppercase'])
    expect(button).toHaveTextContent('Button')
    expect(button).toBeDisabled()    
    expect(container.querySelector('.v-icon--left')).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/alerts/LHeaderAlertContent.stories'
import LHeaderAlertContent from '~/src/components/alerts/LHeaderAlertContent.vue'

const { 
  Informational,
  InformationalNotDismissible,
  Error,
  Success,
  Warning
} = composeStories(stories)

describe('LHeaderAlertContent', () => {
  it('renders informational content', () => {
    const { container } = renderComponent(Informational())

    expect(container.querySelectorAll('.mdi-information').length).toBe(1)
    expect(screen.getByText('Alert content here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: ''})).toBeInTheDocument()
    expect(container.querySelectorAll('.mdi-close').length).toBe(1)  
  })

  it('renders not dismissible content', () => {
    const { container } = renderComponent(InformationalNotDismissible())

    expect(container.querySelectorAll('.mdi-information').length).toBe(1)
    expect(screen.getByText('Alert content here')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: ''})).not.toBeInTheDocument()
    expect(container.querySelectorAll('.mdi-close').length).toBe(0)
  })

  it('renders error icon', () => {
    const { container } = renderComponent(Error())

    expect(container.querySelectorAll('.mdi-alert-octagon').length).toBe(1)
  })

  it('renders success icon', () => {
    const { container } = renderComponent(Success())

    expect(container.querySelectorAll('.mdi-check-circle').length).toBe(1)
  })

  it('renders warning icon', () => {
    const { container } = renderComponent(Warning())

    expect(container.querySelectorAll('.mdi-alert').length).toBe(1)
  })

  it('emits click:dismiss event', async () => {
    // Foi necessário renderizar sem usar a story pois os eventos estavam se perdendo
    const { emitted } = renderComponent(LHeaderAlertContent)

    await userEvent.click(screen.getByRole('button', { name: ''}))

    expect(emitted('click:action')).toBeTruthy()
  })
})

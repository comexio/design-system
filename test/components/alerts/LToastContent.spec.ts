import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/alerts/LToastContent.stories'
import LToastContent from '~/src/components/alerts/LToastContent.vue'

const { 
  InformationalTitleOnly,
  InformationalTitleAndDescription,
  InformationalWithAction,
  InformationalDismissible,
  ErrorTitleOnly,
  SuccessTitleOnly,
  WarningTitleOnly
} = composeStories(stories)

describe('LToastContent', () => {
  it('renders content with only title', () => {
    renderComponent(InformationalTitleOnly())

    expect(screen.getByText('Informational alert')).toBeInTheDocument()
  })

  it('renders content with title and description', () => {
    renderComponent(InformationalTitleAndDescription())

    expect(screen.getByText('Informational alert')).toBeInTheDocument()
    expect(screen.getByText('Alert description here')).toBeInTheDocument()
  })

  it('renders content with title, description and actionButton', () => {
    renderComponent(InformationalWithAction())

    expect(screen.getByText('Informational alert')).toBeInTheDocument()
    expect(screen.getByText('Alert description here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action'})).toBeInTheDocument()
  })

  it('renders content with title, description, actionButton and closeButton', () => {
    renderComponent(InformationalDismissible())

    expect(screen.getByText('Informational alert')).toBeInTheDocument()
    expect(screen.getByText('Alert description here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action'})).toBeInTheDocument()
    expect(screen.getByRole('button', { name: ''})).toBeInTheDocument()
  })

  it('emits click:action and click:dismiss events', async () => {
    // Foi necessário renderizar sem usar a story pois os eventos estavam se perdendo
    const { emitted } = renderComponent(LToastContent, {
      props: {
        actionButton: true,
        actionButtonText: 'Action',
        dismissible: true
      }
    })

    await userEvent.click(screen.getByRole('button', { name: 'Action'}))
    await userEvent.click(screen.getByRole('button', { name: ''}))

    expect(emitted('click:action')).toBeTruthy()
    expect(emitted('click:dismiss')).toBeTruthy()
  })

  it('renders informational icon', () => {
    const { container } = renderComponent(InformationalTitleOnly())

    expect(container.querySelectorAll('.mdi-information').length).toBe(1)
  })

  it('renders error icon', () => {
    const { container } = renderComponent(ErrorTitleOnly())

    expect(container.querySelectorAll('.mdi-alert-circle').length).toBe(1)
  })

  it('renders success icon', () => {
    const { container } = renderComponent(SuccessTitleOnly())

    expect(container.querySelectorAll('.mdi-check-circle').length).toBe(1)
  })

  it('renders warning icon', () => {
    const { container } = renderComponent(WarningTitleOnly())

    expect(container.querySelectorAll('.mdi-alert').length).toBe(1)
  })
})

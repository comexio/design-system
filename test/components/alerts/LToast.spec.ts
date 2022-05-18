import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/alerts/LToast.stories'

const {
  Informational,
  Custom,
  CustomWithBookmarkColor
} = composeStories(stories)

describe('LToast', () => {
  it('renders alert', () => {
    const { container } = renderComponent(Informational())

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(container.querySelectorAll('.mdi-information').length).toBe(1)
    expect(container.querySelectorAll('.LToast__bookmark').length).toBe(1)
    expect(screen.getByText('Informational alert')).toBeInTheDocument()
    expect(screen.getByText('Alert description here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'action' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument()
    expect(container.querySelectorAll('.mdi-close').length).toBe(1)
  })

  it('renders custom alert', () => {
    const { container } = renderComponent(Custom())

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(container.querySelectorAll('.LToast__bookmark').length).toBe(1)
    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })

  it('renders custom alert with custom bookmark color', () => {
    const { container } = renderComponent(CustomWithBookmarkColor())

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(container.querySelectorAll('.LToast__bookmark').length).toBe(1)
    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })
})

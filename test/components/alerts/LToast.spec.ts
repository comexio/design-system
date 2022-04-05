import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/alerts/LToast.stories'

const {
  Informational,
  Custom
} = composeStories(stories)

describe('LToast', () => {
  // Os elementos estão sendo capturados com a hidden: true por conta do value nas stories estar false.
  // Esses elementos estariam teoricamente "invisíveis" para o usuário.
  // TODO: Remover hidden: true quando value nas stories estiver vindo como true por padrão.
  it('renders alert', () => {
    const { container } = renderComponent(Informational())

    expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument()
    expect(container.querySelectorAll('.mdi-information').length).toBe(1)
    expect(container.querySelectorAll('.LToast__bookmark').length).toBe(1)
    expect(screen.getByText('Informational alert')).toBeInTheDocument()
    expect(screen.getByText('Alert description here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'action', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '', hidden: true })).toBeInTheDocument()
    expect(container.querySelectorAll('.mdi-close').length).toBe(1)
  })

  it('renders custom alert', () => {
    const { container } = renderComponent(Custom())

    expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument()
    expect(container.querySelectorAll('.LToast__bookmark').length).toBe(1)
    expect(screen.getByText('Custom content')).toBeInTheDocument()
  })
})

import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/charts/LResumeChart.stories'

const { Default, Dense } = composeStories(stories)

const checkRenderedComponent = () => {
  const images = screen.getAllByRole('img', { name: 'Label' })
  const texts = screen.getAllByText('Label')
  const descriptions = screen.getAllByText('Value/Description')
  const dividers = screen.getAllByRole('separator', { hidden: true })

  expect(images.length).toBe(5)
  expect(texts.length).toBe(5)
  expect(descriptions.length).toBe(5)
  expect(dividers.length).toBe(4)
}

describe('LResumeChart', () => {
  it('renders default args', () => {
    renderComponent(Default())
    checkRenderedComponent()

    const lineWrappers = screen.getAllByTestId('LResumeLine__wrapper')
    lineWrappers.forEach(line => expect(line).toHaveClass('py-3'))
  })

  it('renders dense args', () => {
    renderComponent(Dense())
    checkRenderedComponent()

    const lineWrappers = screen.getAllByTestId('LResumeLine__wrapper')
    lineWrappers.forEach(line => expect(line).not.toHaveClass('py-3'))
  })
})

import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/bars/LProgressBar.stories'

const { 
    Default, 
    Indeterminate
} = composeStories(stories)

describe('LProgressBar', () => {
  it('renders default progress bar', () => {
    renderComponent(Default())
    
    expect(screen.getByRole('progressbar')).toHaveClass('LProgressBar')
  })

  it('renders progress bar without cursor pointer', () => {
    renderComponent(Indeterminate())
    
    expect(screen.getByRole('progressbar')).toHaveClass('LProgressBar--withoutPointer')
  })
})

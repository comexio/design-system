import { screen } from '@testing-library/vue'
import { composeStories } from '@storybook/testing-vue'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import * as stories from '~/docs/stories/components/avatars/LAvatar.stories'

const {
  Text,
  ImageSmall,
  ImageMedium,
  ImageLarge,
  ImageCustomSize
} = composeStories(stories)

describe('LAvatar', () => {
  it('renders text avatar', () => {
    renderComponent(Text())

    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('renders small avatar', () => {
    renderComponent(ImageSmall())

    expect(screen.getByTestId('v-avatar')).toHaveStyle(`height: 40px; width: 40px`)
  })

  it('renders medium avatar', () => {
    renderComponent(ImageMedium())

    expect(screen.getByTestId('v-avatar')).toHaveStyle(`height: 70px; width: 70px`)
  })

  it('renders large avatar', () => {
    renderComponent(ImageLarge())

    expect(screen.getByTestId('v-avatar')).toHaveStyle(`height: 100px; width: 100px`)
  })

  it('renders custom size avatar', () => {
    renderComponent(ImageCustomSize())

    expect(screen.getByTestId('v-avatar')).toHaveStyle(`height: 200px; width: 200px`)
  })
})

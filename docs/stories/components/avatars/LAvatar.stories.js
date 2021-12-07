import LAvatar from '~/src/components/avatars/LAvatar.vue'
import imageSample from '~/docs/stories/assets/person-sample.jpeg'

export default {
  title: 'Components/Avatars/Avatar',
  component: LAvatar,
  argTypes: {
    small: {
      control: 'boolean',
      description: 'Sets small size to avatar: 40px'
    },
    medium: {
      control: 'boolean',
      description: 'Sets medium size to avatar: 70px'
    },
    large: {
      control: 'boolean',
      description: 'Sets large size to avatar: 100px'
    },
    default: {
      description: 'Default slot'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LAvatar },
  template: `
    <l-avatar
      v-bind="$props"
    >
      <span class="white--text">Text</span>
    </l-avatar>
  `
})

const TemplateWithImage = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LAvatar },
  template: `
    <l-avatar
      v-bind="$props"
      data-testid="v-avatar"
    >
      <v-img src="${imageSample}" />
    </l-avatar>
  `
})

export const Text = Template.bind({})
Text.args = {
  color: '#5C068C',
  size: 50
}

export const ImageSmall = TemplateWithImage.bind({})
ImageSmall.args = {
  small: true
}

export const ImageMedium = TemplateWithImage.bind({})
ImageMedium.args = {
  medium: true
}

export const ImageLarge = TemplateWithImage.bind({})
ImageLarge.args = {
  large: true
}

export const ImageCustomSize = TemplateWithImage.bind({})
ImageCustomSize.args = {
  size: 200
}

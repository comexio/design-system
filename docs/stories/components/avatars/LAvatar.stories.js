import LAvatar from '~/src/components/avatars/LAvatar.vue'

export default {
  title: 'Components/Avatars/Avatar',
  component: LAvatar,
  argTypes: {
    small: {
      control: 'boolean',
      description: 'Defines size small to avatar: 40px'
    },
    medium: {
      control: 'boolean',
      description: 'Defines size medium to avatar: 70px'
    },
    large: {
      control: 'boolean',
      description: 'Defines size large to avatar: 100px'
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
      <v-img src="static/media/docs/stories/assets/person-sample.jpeg" />
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

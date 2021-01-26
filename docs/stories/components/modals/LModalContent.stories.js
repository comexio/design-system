
import vuetify from '~/.storybook/vuetify_storybook.js';     
import LModalContent from '@components/modal/LModalContent.vue';

export default {
  title: 'Components/Modals/Modal Content',
  component: LModalContent,
  argTypes: {
    img: { control: 'text', description: 'Image path' },
    imgAlt: { control: 'text', description: 'Alternative text to image' },
    title: { control: 'text', description: 'Content title' },
    subtitle: { control: 'text', description: 'Content subtitle' },
    default: {table: {disable: true}}
  },
};

const Template = (args, { argTypes }) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { LModalContent },
  template: '<l-modal-content v-bind="$props"> </l-modal-content>',
});

export const Default = Template.bind({});
Default.args = {
  img: 'https://i.imgur.com/bOpU1tD.png',
  imgAlt: 'Illustrative picture',
  title: 'Title Modal',
  subtitle: 'Subtitle Modal'
};

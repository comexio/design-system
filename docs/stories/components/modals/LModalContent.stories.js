
import LModalContent from '@components/modal/LModalContent.vue';

export default {
  title: 'Design System/Components/Base/Modal/LModalContent',
  component: LModalContent,
  argTypes: {
    img: { control: 'text', description: 'Image path' },
    imgAlt: { control: 'text', description: 'Alternative image path' },
    title: { control: 'text', description: 'Modal title' },
    subtitle: { control: 'text', description: 'Modal subtitle' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LModalContent },
  template: '<l-modal-content v-bind="$props"> </l-modal-content>',
});

export const Default = Template.bind({});
Default.args = {
  img: 'https://picsum.photos/200/300',
  imgAlt: 'Illustrative picture',
  title: 'Title Modal',
  subtitle: 'Subtitle Modal'
};

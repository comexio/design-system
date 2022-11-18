import LLoading from '~/src/components/loadings/LLoading.vue';

export default {
  title: 'Components/Base/Loading',
  component: LLoading,
  argTypes: {
    color: { 
      control: 'color',
      description: 'Icon color'
    },
    size: { 
      control: 'text',
      description: 'Icon size'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LLoading },
  template: `
    <div>
      <l-loading v-bind="$props" />
    </div>
  `
});

export const Default = Template.bind({});

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#FE8F1C'
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '42px'
};

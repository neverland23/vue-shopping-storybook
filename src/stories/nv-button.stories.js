import NvButton from '../components/nv-button.vue';

export default {
  title: 'Components/NvButton',
  component: NvButton,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NvButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<nv-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

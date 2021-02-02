import { addDecorator } from '@storybook/vue';
import vuetify from './helpers/config.helper.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(() => ({
  vuetify,
  template: `
  <v-app style="height: 200px">
    <story/>
  </v-app>
  `
}))
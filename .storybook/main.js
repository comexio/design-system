const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader', 
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
            @import "_variables";
            @import "_globals";
            @import "_main";
            `,
            sassOptions: {
              includePaths: ['src/assets/scss'],
            }
          },
        } 
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
  "stories": [
    "../docs/**/*.stories.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
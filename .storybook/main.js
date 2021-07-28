const path = require('path');

module.exports = {
  'stories': [
    '../docs/**/*.stories.mdx',
    '../docs/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../'),
      '@components': path.resolve(__dirname, '../src/components'),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
            @import '_variables';
            @import '_globals';
            @import '_main';
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
  }
}

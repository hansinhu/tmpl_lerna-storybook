module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  // babel: async (options) => {
  //   options.plugins.push('babel-plugin-inline-react-svg');
  //   return options;
  // },
  // "framework": "@storybook/react"
}
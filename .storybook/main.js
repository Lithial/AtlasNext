const path = require("path");

module.exports = {
  "stories": [
      "../src/**/*.stories.@(js|jsx|ts|tsx)",
      "../pageStories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    },
    "storybook-addon-next-auth0",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}

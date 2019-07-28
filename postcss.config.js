// in postcss.config.js
const postcssPresetEnv = require(`postcss-preset-env`)
// const postcss = require('postcss');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    postcssCustomProperties({
        preserve: false,
        importFrom: 'src/theme/variables.css',
    }),
  ],
})
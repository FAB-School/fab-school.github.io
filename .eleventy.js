const i18n = require('eleventy-plugin-i18n')
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(i18n, {
    translations: {
      signup: {
        en: 'Sign up',
        ru: 'Записаться',
        tr: 'Üye olmak',
      },
    },
  })
  return {
    dir: { input: 'src', output: 'public' },
  }
}

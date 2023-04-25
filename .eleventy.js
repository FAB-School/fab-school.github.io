const i18n = require('eleventy-plugin-i18n')
const filters = require('./utils/filters.js')
const site = require('./src/_data/site.json');
const localizedCollections = ['post'];
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
  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  // For each language, create collection of posts with given language
  site.langs.map((langEntry) => {
    for (const localizedCollection of localizedCollections) {
      // Produces collection with the pluralized name + '_' + locale,
      // E.g.: 'posts_en'
      eleventyConfig.addCollection(
        `${localizedCollection}s_${langEntry.id}`,
        function (collectionApi) {
          return collectionApi
            .getFilteredByTag(localizedCollection)
            .filter(function (item) {
              return item.data.locale === langEntry.id
            })
        }
      )
    }
  })
  return {
    dir: { input: 'src', output: 'docs' },
  }
}

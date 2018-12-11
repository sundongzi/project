// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    // 'postcss-import': {},
    'postcss-partial-import': {path: ["src/style"]},
    'postcss-bem' : {
      defaultNamespace: undefined,
      style: 'suit', // suit or bem, suit by default
      shortcuts: {
        component: 'b',          //override at-rule name
        descendent: 'e',
        modifier: 'm'
      },
      separators: {
        namespace: '-',
        descendent: '__',         // overwrite any default separator for chosen style
        modifier: '--'
      }
    },
    'precss': {},
    'postcss-color-function': {},
    'postcss-sass-color-functions': {},
    'postcss-define-function': {},
    'postcss-utils': {},
    'postcss-calc': {},
    'pixrem': {},
    'postcss-nested': {},
    'autoprefixer': {}
  }
}
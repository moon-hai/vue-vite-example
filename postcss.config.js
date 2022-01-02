module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-mod-function': true
      }
    },
    // https://github.com/csstools/precss
    precss: {}
  }
}

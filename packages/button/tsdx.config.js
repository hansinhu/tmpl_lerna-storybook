const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        extensions: ['.scss'],
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
      })
    )

    return config
  },
}

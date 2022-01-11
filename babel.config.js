module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ]

  const plugins = [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: 'css',
      },
    ],
    ['@babel/plugin-proposal-class-properties'],
    ['babel-plugin-inline-react-svg']
  ]

  return {
    presets,
    plugins,
  }
}

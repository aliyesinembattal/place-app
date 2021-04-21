// // Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
// // const antdTheme = require('./src/theme.js');
const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
// const { override, fixBabelImports, addLessLoader, useEslintRc, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');

// module.exports = override(
//   addDecoratorsLegacy(),
//   useEslintRc(),
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: true
//   }),
//   addLessLoader({
//     javascriptEnabled: true
//   }),
//   addWebpackAlias({
//     '@': path.resolve(__dirname, 'src')
//   })
// );

// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const {
  override,
  // fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);

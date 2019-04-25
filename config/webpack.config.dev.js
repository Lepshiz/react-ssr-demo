const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const { getAppEnv } = require('./env')

const env = getAppEnv()
const { PUBLIC_URL = '' } = env.raw
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath)

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=true', resolvePath('../src/index.js')],
  output: {
    path: resolvePath('../build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: PUBLIC_URL + '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: eslintFormatter,
      //       },
      //       loader: 'eslint-loader',
      //     },
      //   ],
      //   include: resolvePath('../src'),
      // },
      {
        test: /\.(js|jsx)$/,
        include: resolvePath('../src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.s?css$/,
        exclude: [resolvePath('../src/styles')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: ['last 2 versions', 'not ie < 11'],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s?css$/,
        include: [resolvePath('../src/styles')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: ['last 2 versions', 'not ie < 11'],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      // This loader doesn't use a "test" so it will catch all modules
      // that fall through the other loaders.
      {
        loader: require.resolve('file-loader'),
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx|s?css)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env.forWebpackDefinePlugin),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new LodashModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    new ReactLoadablePlugin({
      filename: 'build/react-loadable.json',
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

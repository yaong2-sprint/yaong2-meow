import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

const module = (env) => {
  const isDevelopment = env === 'isDevelopment';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'hidden-source-map',
    entry: './src/index.js',
    output: {
      filename: 'bundle.[fullhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          include: path.resolve('src'),
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        },
      ],
    },

    resolve: {
      extensions: ['.js'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@mocks': path.resolve(__dirname, 'src/mocks'),
        '@repository': path.resolve(__dirname, 'src/repository'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@style': path.resolve(__dirname, 'src/style'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@context': path.resolve(__dirname, 'src/context'),
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      })
    ],

    devServer: {
      host: 'localhost',
      port: 8080,
      stats: 'errors-only',
      open: true,
      historyApiFallback: true,
      publicPath: '/'
    },
  };
};

export default module;

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const dirname = path.resolve();

const module = (env) => {
  const isDevelopment = env === 'isDevelopment';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'hidden-source-map',
    entry: './src/main.js',
    output: {
      filename: 'bundle.[fullhash].js',
      path: path.resolve(dirname, 'dist'),
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
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],

    devServer: {
      host: 'localhost',
      port: 8080,
      stats: 'errors-only',
      open: true,
      historyApiFallback: true,
      publicPath: '/',
    },
  };
};

export default module;

/* eslint import/no-extraneous-dependencies: 0 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import postCssImport from 'postcss-import';

const rules = [
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: true,
      },
    },
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [postCssImport, autoprefixer],
          },
        },
      ],
    }),
  },
  {
    test: /\.jpg$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
];

export default rules;

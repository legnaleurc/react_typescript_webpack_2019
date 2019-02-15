import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';


const config: webpack.Configuration = {
  entry: './src/ts/index.tsx',
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
           loader: 'babel-loader',
          },
        ],
      },
      // ts, tsx
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
           loader: 'babel-loader',
          },
          {
           loader: 'awesome-typescript-loader',
          },
        ],
      },
      // html
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/html/index.html',
      // this uses the path related to output directory, not source directory
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};


export default config;

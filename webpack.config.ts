import webpack from 'webpack';


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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};


export default config;

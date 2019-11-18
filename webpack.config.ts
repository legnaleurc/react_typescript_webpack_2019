import webpack from 'webpack';


const config: webpack.Configuration = {
  entry: './src/ts/index.tsx',
  module: {
    rules: [
      // js, ts, tsx
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
           loader: 'babel-loader',
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

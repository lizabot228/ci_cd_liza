module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

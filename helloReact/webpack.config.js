module.exports = {
  // by Default, .jsx is not supportted, we will need babel-loader
  entry: './public/app2.jsx',
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['','.js','jsx']
  },
  // webpack loader
  module: {
    loaders: [
      {
        loader:'babel-loader',
        query: {
          presets:['react','es2015']
        },
        // which files we want to loader to be applied, use regular express for all .jsx files
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

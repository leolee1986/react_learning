module.exports = {
  // by Default, .jsx is not supportted, we will need babel-loader
  entry: './app/app.jsx',
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['','.js','.jsx']
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

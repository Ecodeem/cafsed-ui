var webpack = require('webpack');
var dotenv = require('dotenv');
var path = require('path');


const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
 
});

module.exports = () => {
    
    
return{
 entry: __dirname + '/app/index.js',
 resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
 },
 module: {
   rules:[
     {
       test: /\.js$/,
       exclude: [/node_modules/],
       loader: 'babel-loader'
       
     },
     {
       test: /\.(png|jpg|gif|svg)$/,
       loader:  'file-loader',
       
     },
     {
       test: /\.(png|woff|woff2|eot|ttf|svg)$/,
       loader: 'url-loader?limit=100000',
       
     },
     
     {
        test: /\.(css|scss)$/i,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
   ]
  },
  output:{
    filename: 'bundle.js',
   path: path.join(__dirname, 'build'),
   publicPath: '/'
  },
  devServer:{
    historyApiFallback: true,
    publicPath: '/',
  },
  
  plugins: [
    
          new webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify('http://127.0.0.1/api/'),
            'process.env.USE_BASE_URL': JSON.stringify('http://localhost:8080/app/'),
            //'process.env.API_URL': JSON.stringify('https://www.cafsed.org/api/'), //stage to production
            //'process.env.USE_BASE_URL': JSON.stringify('https://www.cafsed.org/'), //stage to production
            'process.env.BASE_URL': JSON.stringify('https://www.cafsed.org'),
            
            }),
   
        HTMLWebpackPluginConfig
  
            ]
}
};
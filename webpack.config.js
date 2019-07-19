const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/src",
	entry: {
		javscript: "./index.js", 
		html: "./index.html",
	},
	output: {
		path: __dirname + '/dist',
	    filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js'
	},
   	plugins: [
     	new HtmlWebpackPlugin({title: 'Output Management'})
   	],
	module: {
	  	rules: [
			{
			  	test: /\.js|jsx$/,
			  	exclude: /node_modules/,
			  	loaders: ["babel-loader"],
			},
			{
			    test: /\.html$/,
			    use: [ {
			      	loader: 'html-loader',
			      	options: {
			        	minimize: true
			      	}
			    }]
			},
			{
	            test: /\.scss$/,
	            use: [
	                "style-loader", "css-loader", "sass-loader"
	            ]
	        }			
	  	],
	}
}
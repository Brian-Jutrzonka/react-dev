const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/src",
	entry: {
		javascript: "./script.js", 
		html: "./index.html",
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js',
		sourceMapFilename: '[name].[hash:8].map',
		chunkFilename: '[id].[hash:8].js'
	},
   	plugins: [
     	new HtmlWebpackPlugin({
     		filename: 'index.html',
     		template: './index.html'
     	})
   	],
   	mode:'development',
	devServer: {
	    port: 3000
	},
	resolve: {
		alias: {
	  		scss_variables: path.resolve(__dirname + "/src/")
		}
	},
	module: {
	  	rules: [
			{
			  	test: /\.js|jsx$/,
			  	exclude: /node_modules/,
			  	loaders: ["babel-loader"],
			},
			{
			    test: /\.html$/,
			    use: [ 
			    	{
				      	loader: 'html-loader',
				      	options: {
				        	minimize: true
				      	}
					}
			    ]
			},
            {
                test:/\.(s*)css$/,
                use:[
                	{
	                	loader: 'style-loader',
						options: {
			                sourceMap: true
			            }	                	
	                },{
	                	loader: 'css-loader',
						options: {
			                sourceMap: true
			            }	           
	                }, {
	                	loader: 'sass-loader',
						options: {
			                sourceMap: true
			            }
	                }
                ]
            }
	  	]
	}
}
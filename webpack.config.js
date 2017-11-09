const webpack = require('webpack');
const ET = require('extract-text-webpack-plugin');

module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:80',
		'webpack/hot/only-dev-server',
		__dirname + '/src/js/app.js'
	],

	output:{
		path:__dirname + '/prd',
		filename:'bundle.js'
	},

	devtool:'source-map',

	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,

				loader:'style-loader!css-loader!sass-loader'
				
			},
			{
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test:/\.jsx$/,
				loader:'babel-loader'
			}
		]
	},
	plugins:[
		new ET('./bundle.css'),

		new webpack.HotModuleReplacementPlugin()
	],
	externals:{

	}
}
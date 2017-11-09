const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config),{
	contentBase:__dirname + '/prd',
	hot:true,
	inline:true,
	historyApiFallback:true
}).listen(80,'localhost',function(err,result){
	if(err){
		console.log(err);
	}else{
		console.log('Listening at localhost:80');
	}
});
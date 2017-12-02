const path = require('path');

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: './client.jsx',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'client.js',
			publicPath: '/static/',
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					 test: /\.(css|scss|sass)$/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							query: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]',
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				}
			],
		},
	},
	{
		name: 'server',
		target: 'node',
		entry: './server.jsx',
		output: {
			path: path.join(__dirname, 'static'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/static/',
		},
		devtool: 'source-map',
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},
				{
					test: /\.(css|scss|sass)$/,
					use: [
						{
							loader: 'isomorphic-style-loader',
						},
						{
							loader: 'css-loader',
							query: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]',
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				} 
			],
		},
	}
];
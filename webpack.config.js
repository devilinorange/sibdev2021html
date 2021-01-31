const HtmlWebpackPlugin       = require("html-webpack-plugin");
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const path                    = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "production",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader",
				]
			},
			{
				test: /\.(svg|png)$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024
					}
				}
			},
			{
				test: /\.html$/i,
				use: [ "html-loader" ]
			},
			{
				test: /\.ttf$/i,
				type: "asset/resource"
			}
		]
	}
}
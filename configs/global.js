const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJson = require("../package.json");
var webpack = require('webpack')

module.exports = function (_path) {
    return {
        entry: ["./src/js/app.js"],
        output: {
            path: path.resolve(_path, "dist"),
            filename: "js/[name].js"
        },

        resolve: {
            alias: {
                components: path.resolve(_path, "src", "js", "components"),
                reducers: path.resolve(_path, "src", "js", "reducers")
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    modules: true,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            'postcss-loader'
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    modules: true,
                                    sourceMap: true,
                                    importLoaders: 2,
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                }
                            },
                            'sass-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            new webpack.DefinePlugin({
                __VERSION__: JSON.stringify(packageJson.version),
            }),
            new ExtractTextPlugin('lineStyles.css')
        ]
    };
}
const path = require('path');
const HtmlWebpackPlugin = require();
const MiniCssExtractPlugin = require();
const {CleanWebpackPlugin} = require();

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    devtools: 'inline-source-maps',
    
    devServer: {
        contentBase: 'dist',
        port: 8080,
        hot: true,
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader', options: {
                        sourceMap: true
                    }}
                ]
            },

            {
                test:/\.(png|gif|svg|jpe?g)$/,
                use: {
                    loader: 'file-loader',
                    options:{
                        outputPath: 'images',
                        name: '[name].[ext]'
                    }
                }
            },

            {
                test:/\.html$/,
                use: {loader: 'html-loader'}
            },

            {
                test:/\.(woff|woff2|ttf|otf|eot)$/,
                use: {loader: 'file-loader', options:{
                    outputPath: 'fonts'
                }}
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssests: false
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        })
    ]
}
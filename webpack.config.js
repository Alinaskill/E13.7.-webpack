const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
        }),
    ],
    output: {
        filename: 'main.js'
    },

    stats: {
        children: false
    },



    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
}
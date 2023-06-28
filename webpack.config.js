const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        port: '8080',
        static: ['./public'],
        open: true,
        hot: true ,
        liveReload: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use:  'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)$/,
                use:  'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}
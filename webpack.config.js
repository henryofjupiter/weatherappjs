const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/',
    },
    devServer: {
        static: './src',
        historyApiFallback: true,
    }
}
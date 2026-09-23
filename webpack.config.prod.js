const path = require('path');
//const CleanPlugin = require('clean-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'production',
    entry: '/src/script.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/',
    },
    devtool: 'cheap-source-map',
    // devServer: {
    //     static: './src',
    //     historyApiFallback: true,
    // }
}
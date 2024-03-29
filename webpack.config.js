const path = require('path');
module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    watch: true,
};

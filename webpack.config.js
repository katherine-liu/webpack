module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // transform ES6 to ES5
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // style-loader: add css files into DOM
            // css-loader: add css files into the JS files
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // },

            // LESS
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}

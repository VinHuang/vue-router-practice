var path = require('path');

module.exports = {
    entry: './src/main',
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-laoder!autoprefixer-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extensions: ['','.js','.vue'],
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    devtool: 'eval-source-map'
};
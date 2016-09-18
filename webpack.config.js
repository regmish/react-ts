var path = require('path');
var webpack = require('webpack');


module.exports = {

    devtool: "source-map", // Enable sourcemaps for debugging webpack's output.

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        "./src/index.tsx"
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],


    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"] // Add '.ts' and '.tsx' as resolvable extensions.
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/, // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                loaders: ["react-hot-loader/webpack", "ts-loader"],
                include: path.join(__dirname, 'src')
            }
        ],

        preLoaders: [
            {
                test: /\.js$/, // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { addExclude, addConfig } = require('./utils');

const addSassConfig = (config, env) => {

    addExclude(config, /\.scss$/, 'url', 'file');

    addConfig(config, {
        test: /\.scss$/,
        use: (env === 'development') ? [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ] : ExtractTextPlugin.extract({
            fallback: require.resolve('style-loader'),
            use: [
                require.resolve('css-loader'),
                require.resolve('sass-loader')
            ]
        })
    });

    return config;
}

module.exports = addSassConfig;

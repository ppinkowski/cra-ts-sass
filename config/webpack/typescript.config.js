const { addResolveExtensions, addExclude, addConfig, addTopLevelConfig } = require('./utils');

const addTypescriptConfig = (config, env) => {

    addResolveExtensions(config, '.ts', '.tsx');

    addExclude(config, /\.tsx?$/, 'file');

    addTopLevelConfig(config, {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: require.resolve('tslint-loader'),
        options: {
          configFile: 'tslint.json'
        }
    }, 0);

    addConfig(config, {
        test: /\.tsx?$/,
        use: [{
            loader: require.resolve('awesome-typescript-loader'),
            options: {
                useCache: env === 'development',
                useBabel: true,
                babelOptions: {
                    babelrc: false,
                    presets: [require.resolve('babel-preset-react-app')]
                },
                babelCore: require.resolve('babel-core')
            }
        }]
    }, 1);

    return config;
}

module.exports = addTypescriptConfig;

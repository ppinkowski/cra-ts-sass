const getMainConfig = (config) => config.module.rules.find(r => r.oneOf).oneOf;

const addExclude = (config, exclude, ...loaders) => {
    const mainConfig = getMainConfig(config);
    for (let loader of loaders) {
        const excludeConfig = mainConfig.find(c => c.loader && c.loader.indexOf(loader + '-loader') !== -1);
        excludeConfig.exclude = (excludeConfig.exclude || []).concat([exclude]);
    }
}

const addConfig = (config, add, index) => {
    if (index) {
        getMainConfig(config).splice(index, 0, add);
    } else {
        getMainConfig(config).push(add);
    }
}

const addTopLevelConfig = (config, add, index) => {
    if (index) {
        config.module.rules.splice(index, 0, add);
    } else {
        config.module.rules.push(add);
    }
}

const addResolveExtensions = (config, ...extensions) => {
    config.resolve.extensions = config.resolve.extensions.concat(extensions);
}

module.exports = { getMainConfig, addExclude, addConfig, addTopLevelConfig, addResolveExtensions };

const addSass = require('./config/sass.config');
const addTypescript = require('./config/typescript.config');

module.exports = function override(config, env) {
    config = addSass(config, env);
    config = addTypescript(config, env);
    return config;
}

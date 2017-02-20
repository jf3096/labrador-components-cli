"use strict";
const program = require('commander');
const utils_1 = require('./libs/utils/utils');
program
    .version(utils_1.packageJSON.version);
program
    .command('create <name>')
    .alias('c')
    .description('创建Labrador组件')
    .action((name, options) => {
    require('./create')(name, options);
});

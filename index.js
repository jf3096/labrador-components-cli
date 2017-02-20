"use strict";
const program = require('commander');
const utils_1 = require('./libs/utils/utils');
const components_1 = require('./libs/components/components');
program
    .version(utils_1.packageJSON.version);
program
    .command('create <name>')
    .alias('c')
    .description('创建Labrador组件')
    .action((name) => {
    components_1.default(name);
});
program.parse(process.argv);
!program.args.length && program.help();

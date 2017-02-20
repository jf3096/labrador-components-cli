import * as program from 'commander';
import {packageJSON} from './libs/utils/utils';

program
    .version(packageJSON.version);

program
    .command('create <name>')
    .alias('c')
    .description('创建Labrador组件')
    .action((name, options) => {
        require('./create')(name, options);
    });


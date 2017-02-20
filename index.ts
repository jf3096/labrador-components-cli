import * as program from 'commander';
import {packageJSON} from './libs/utils/utils';
import createComponent from './libs/components/components';

program
    .version(packageJSON.version);

program
    .command('create <name>')
    .alias('c')
    .description('创建Labrador组件')
    .action((name) => {
        createComponent(name);
    });
program.parse(process.argv);
!program.args.length && program.help();
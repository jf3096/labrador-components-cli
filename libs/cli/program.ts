import * as program from 'commander';
import {packageJSON} from '../utils/utils';
import createComponent from '../../libs/components/components';
import {getAvailableComponents} from '../utils/file';
program
    .version(packageJSON.version);
program
    .command('create <name>')
    .alias('c')
    .description(`创建Labrador组件\r\n\r\n${getAvailableComponents()}`)
    .action((name) => createComponent(name));
program.parse(process.argv);
export default program;

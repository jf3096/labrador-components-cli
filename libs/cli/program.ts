import * as program from 'commander';
import {packageJSON} from '../utils/utils';
import {getAvailableComponentsString} from '../utils/file';
import createComponent from '../components/components';
program
    .version(packageJSON.version);
program
    .command('create <name>')
    .alias('c')
    .description(`创建Labrador组件\r\n\r\n${getAvailableComponentsString()}`)
    .action((name) => {
        createComponent(name);
    })
    .parse(process.argv);
export default program;
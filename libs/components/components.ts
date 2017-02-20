import * as path from 'path';
import {getCurrentCwd} from '../utils/utils';
import {createDirectoryIfNoneExist, copyFilesIfNoneExist} from '../utils/file';
import * as fs from 'fs';
import {warning} from '../utils/logs';

export default function createComponent(name: string) {
    const sourceFileSrc = path.join(__dirname, `../../components/${name}`);
    debugger;
    const targetSrc = path.resolve(getCurrentCwd(), `__components/${name}`);
    warning(fs.existsSync(targetSrc), `component文件不存在, 自动创建路劲${targetSrc}`);
    createDirectoryIfNoneExist(targetSrc);
    copyFilesIfNoneExist(sourceFileSrc, targetSrc);
}

createComponent('bottomButton');

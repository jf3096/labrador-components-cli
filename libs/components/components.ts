import * as path from 'path';
import {getCurrentCwd} from '../utils/utils';
import {createDirectoryIfNoneExist, copyFilesIfNoneExist} from '../utils/file';
import * as fs from 'fs';
import {warning, error} from '../utils/logs';
import {DIR} from '../const/const';

export default function createComponent(name: string) {
    const sourceFileSrc = path.join(__dirname, `../../components/${name}`);
    const targetSrc = path.resolve(getCurrentCwd(), `${DIR}/${name}`);
    const isTargetSourceExist = fs.existsSync(sourceFileSrc);
    error(isTargetSourceExist, `组件${name}不存在`);
    warning(fs.existsSync(targetSrc), `component文件不存在, 自动创建路劲${targetSrc}`);
    createDirectoryIfNoneExist(targetSrc);
    copyFilesIfNoneExist(sourceFileSrc, targetSrc);
}
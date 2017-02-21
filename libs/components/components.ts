import * as path from 'path';
import {getCurrentCwd} from '../utils/utils';
import {createDirectoryIfNoneExist, copyFilesIfNoneExist} from '../utils/file';
import * as fs from 'fs';
import {warning, error, info} from '../utils/logs';
import {DIR} from '../const/const';
import program from '../cli/program';
export default function createComponent(name: string) {
    const sourceFileSrc = path.join(__dirname, `../../components/${name}`);
    const targetSrc = path.resolve(getCurrentCwd(), `${DIR}/${name}`);
    const isTargetSourceExist = fs.existsSync(sourceFileSrc);
    if (!isTargetSourceExist) {
        error(false, `组件${name}不存在`);
    }
    info(fs.existsSync(targetSrc), `component文件不存在, 自动创建路径${targetSrc}`);
    createDirectoryIfNoneExist(targetSrc);
    //noinspection JSIgnoredPromiseFromCall
    copyFilesIfNoneExist(sourceFileSrc, targetSrc);
}
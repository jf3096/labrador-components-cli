"use strict";
const path = require('path');
const utils_1 = require('../utils/utils');
const file_1 = require('../utils/file');
const fs = require('fs');
const logs_1 = require('../utils/logs');
const const_1 = require('../const/const');
function createComponent(name) {
    const sourceFileSrc = path.join(__dirname, `../../components/${name}`);
    const targetSrc = path.resolve(utils_1.getCurrentCwd(), `${const_1.DIR}/${name}`);
    const isTargetSourceExist = fs.existsSync(sourceFileSrc);
    logs_1.error(isTargetSourceExist, `组件${name}不存在`);
    logs_1.warning(fs.existsSync(targetSrc), `component文件不存在, 自动创建路劲${targetSrc}`);
    file_1.createDirectoryIfNoneExist(targetSrc);
    file_1.copyFilesIfNoneExist(sourceFileSrc, targetSrc);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createComponent;

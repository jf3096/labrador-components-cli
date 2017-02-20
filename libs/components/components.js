"use strict";
const path = require('path');
const utils_1 = require('../utils/utils');
const file_1 = require('../utils/file');
const fs = require('fs');
const logs_1 = require('../utils/logs');
function createComponent(name) {
    const sourceFileSrc = path.join(__dirname, `../../components/${name}`);
    debugger;
    const targetSrc = path.resolve(utils_1.getCurrentCwd(), `__components/${name}`);
    logs_1.warning(fs.existsSync(targetSrc), `component文件不存在, 自动创建路劲${targetSrc}`);
    file_1.createDirectoryIfNoneExist(targetSrc);
    file_1.copyFilesIfNoneExist(sourceFileSrc, targetSrc);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createComponent;
createComponent('bottomButton');

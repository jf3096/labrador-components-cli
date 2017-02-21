"use strict";
const inquirer = require('inquirer');
const file_1 = require('./libs/utils/file');
const components_1 = require('./libs/components/components');
const componentName = process.argv.slice(2)[0];
const availableComponentNames = file_1.getAvailableComponentNames(componentName);
if (availableComponentNames.length > 1) {
    inquirer.prompt([
        {
            type: "list",
            name: "componentName",
            message: "选择组件",
            choices: file_1.getAvailableComponentNames(componentName)
        }
    ]).then((answers) => {
        components_1.default(answers.componentName);
    });
}
else if (availableComponentNames.length === 1) {
    components_1.default(availableComponentNames[0]);
}
else {
    throw `availableComponentNames is invalid. availableComponentNames = ${availableComponentNames.length}`;
}

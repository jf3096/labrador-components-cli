import * as inquirer from 'inquirer';
import {getAvailableComponentNames} from './libs/utils/file';
import createComponent from './libs/components/components';

const componentName = process.argv.slice(2)[0];

const availableComponentNames = getAvailableComponentNames(componentName);

if (availableComponentNames.length > 1) {
    inquirer.prompt([
        {
            type: "list",
            name: "componentName",
            message: "选择组件",
            choices: getAvailableComponentNames(componentName)
        }
    ]).then((answers: {componentName: string}) => {
        createComponent(answers.componentName);
    });
}
else if (availableComponentNames.length === 1) {
    createComponent(availableComponentNames[0]);
}
else {
    throw `availableComponentNames is invalid. availableComponentNames = ${availableComponentNames.length}`;
}
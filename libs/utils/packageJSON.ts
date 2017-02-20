interface IPackageJSON {
    name: string;
    version: string;
}

const packageJSON: IPackageJSON = require('../../package.json');
export default packageJSON;
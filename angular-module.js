import * as _ from '../components/lodash/lodash';

let _module = {};

export function setModuleDependencies(module) {
    _.assign(_module, module);
}

export default _module;

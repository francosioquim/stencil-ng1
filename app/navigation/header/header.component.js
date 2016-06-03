import _module from '../../angular-module';
import './header.component.scss';

export var headerComponent = {
    template: require('./header.component.html')
};

_module.component('headerComponent', headerComponent);

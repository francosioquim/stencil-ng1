
require('../components/angular/angular.min');
require('../components/angular-animate/angular-animate.min');
require('../components/angular-cookies/angular-cookies.min');
require('../components/angular-route/angular-route.min');
require('../components/angular-sanitize/angular-sanitize.min');
require('../components/angular-touch/angular-touch.min');

import _module, {setModuleDependencies} from './angular-module';

let angularModule = angular.module('YouAppSeedName.here', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCookies'
]);

/******************************************************************************
 * NOTE: this "must" come after the main module is defined
 *****************************************************************************/

setModuleDependencies(angularModule);

/******************************************************************************
 * main app: components, directives, controllers, main style, etc
 *****************************************************************************/

import './app.scss';

require('./home/home.controller.js');
require('./navigation/header/header.component.js');

/******************************************************************************
 * Angular bootstrap/setup section
 *****************************************************************************/

// setup routes
_module.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            template: require('./home/home.controller.html'),
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
]);

// finally, bootstrap Angular
angular.bootstrap(document, [_module.name], {strictDi: true});


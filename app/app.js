import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';

import AppComponent from './app.component';
import './components/home/home.module';
import './components/preference/preference.module';
import './components/main/main.module';

export default angular
    .module('app', [
        'ngMaterial'
        , 'ui.router'
        , 'homeModule'
        , 'preferenceModule'
        , 'mainModule'])
    .component(AppComponent.name, AppComponent.config)
    .config(['$mdThemingProvider', ($mdThemingProvider)=>{
        $mdThemingProvider.theme('default')
            .primaryPalette('orange');
    }])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)=>{
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home-component></home-component>'
            })
            .state('preference', {
                url: '/preference',
                template: '<preference-component></preference-component>'
            })
            .state('main', {
                url: '/main',
                template: '<main-component></main-component>'
            });
    }]);

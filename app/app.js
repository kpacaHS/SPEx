import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';

import AppComponent from './app.component';
import HomeModule from './components/home/home.module';


export default angular
    .module('app', [
        'ngMaterial'
        , 'ui.router'
        , 'material.svgAssetsCache'
        , 'homeModule'])
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
    }]);

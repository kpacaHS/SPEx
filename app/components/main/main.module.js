import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';

import MainComponent from './main.component';
import NavModule from '../nav/nav.module';

let MainModule = angular.module('mainModule', [
    'ngMaterial'
    , 'ui.router'
    , 'navModule'
    , 'material.svgAssetsCache'])
    .component(MainComponent.name, MainComponent.config);
    
    
export default MainModule;
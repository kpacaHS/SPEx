import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import HomeComponent from './home.component';

let HomeModule = angular.module('homeModule', [
    'ngMaterial'
    , 'material.svgAssetsCache'])
    .component(HomeComponent.name, HomeComponent.config);
    
export default HomeModule;
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import abmComponent from './abm.component';

let abmModule = angular.module('abm', [
  uiRouter
])

.component('abm', abmComponent);

export default abmModule;

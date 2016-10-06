import angular from 'angular';
import uiRouter from 'angular-ui-router';
import countComponent from './count.component';

let countModule = angular.module('count', [
  uiRouter
])

.component('count', countComponent);

export default countModule;

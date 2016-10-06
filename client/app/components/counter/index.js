import angular from 'angular';
import uiRouter from 'angular-ui-router';
import counterComponent from './counter.component';

let counterModule = angular.module('counter', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('counter', {
      url: '/counter',
      template: '<counter></counter>'
    });
})

.component('counter', counterComponent);

export default counterModule;

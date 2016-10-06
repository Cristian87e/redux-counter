import angular from 'angular';
import Home from './home';
import About from './about';
import Counter from './counter';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Counter.name
]);

export default componentModule;

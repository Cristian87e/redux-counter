import angular from 'angular';
import Navbar from './navbar';
import Hero from './hero';
import User from './user';
import Count from './count';
import Abm from './abm';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Count.name,
  Abm.name
]);

export default commonModule;

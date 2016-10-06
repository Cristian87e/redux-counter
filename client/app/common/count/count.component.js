import template from './count.html';
import controller from './count.controller';
import './count.scss';

let countComponent = {
  restrict: 'E',
  bindings: {
    value: '<',
    delay: '<',
    increment: '&',
    decrement: '&',
    updateValue: '&',
    incrementIfOdd: '&',
    incrementAsync: '&'
  },
  template,
  controller
};

export default countComponent;

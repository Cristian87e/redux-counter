import template from './abm.html';
import controller from './abm.controller';
import './abm.scss';

let abmComponent = {
  restrict: 'E',
  bindings: {
    text: '=',
    itFails: '<',
    updateText: '&',
    save: '&',
    cancel: '&',
    makeItFail: '&'
  },
  template,
  controller
};

export default abmComponent;

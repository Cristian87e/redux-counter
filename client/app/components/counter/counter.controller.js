import { counterActions, abmActions } from '../../actions';
import { abmSelector } from '../../selectors';

class CounterController {
  constructor($ngRedux, $scope) {
    'ngInject';

    const getText = abmSelector.makeGetText();

    let unsubscribe = $ngRedux.connect(mapStateToThis, {
      ...abmActions,
      ...counterActions
    })(this);
    $scope.$on('$destroy', unsubscribe);



    this.name = 'counter';
    this.delay = 0;

    function mapStateToThis(state) {
      debugger;

      return {
        value: state.counter.value,
        text: getText(state)//state.abm.text
      };
    }
  }

  $onChanges(valueChanges) {
    debugger
  }
}

export default CounterController;

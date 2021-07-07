import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ToggleButtonComponent extends Component {
  @action
  toggleState(state) {
    this.args.toggleState(state);
  }
}

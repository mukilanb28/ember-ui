import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ToggleButtonComponent extends Component {
  @tracked isArchived;

  @action
  showUsers() {
    this.args.toggleState(0);
  }

  @action
  showAllUsers() {
    this.args.toggleState(1);
  }
}

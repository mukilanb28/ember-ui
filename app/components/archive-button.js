import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ArchiveButtonComponent extends Component {
  @tracked isArchived;

  get label() {
    return this.args.isArchived ? 'UnArchive' : 'Archive';
  }

  @action
  toggleArchiveState() {
    this.args.model.set('archived', !this.args.isArchived);
    this.args.model.save();
  }
}

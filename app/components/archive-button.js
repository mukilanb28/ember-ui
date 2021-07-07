import Component from '@glimmer/component';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class ArchiveButtonComponent extends Component {

     @alias('args.model.archived') isArchived;

    get label() {
        return this.args.model?.archived ? "UnArchive" : "Archive";
    }

    @action
    toggleArchiveState(){
        this.args.model.set("archived", !this.args.model.archived);
        this.args.model.save();
    }
}

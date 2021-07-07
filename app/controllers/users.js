import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class UsersController extends Controller {
  queryParams = ['archived'];

  @tracked model = '';
  archived = 0;
}

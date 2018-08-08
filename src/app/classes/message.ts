import { User } from './user';
import { send } from '../../../node_modules/@types/q';

export class Message {
  message: string;
  createdAt: Date;
  sender: User;

  constructor({message, createdAt, sender}) {
    this.message = message;
    this.createdAt = createdAt;
    // this.sender = sender;
    this.sender = new User(sender);

  }
}

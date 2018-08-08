import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {
  // TODO replace with Firebase data
  public dummyData = [
    {
      message: 'la lal alala',
      createdAt: new Date(),
      sender: {
        firstName: 'steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      message: 'Where is my pizza',
      createdAt: new Date(),
      sender: {
        firstName: 'Joseph',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    }
   ];
  constructor() { }

  ngOnInit() {
  }

}

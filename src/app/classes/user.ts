export class User {
  firstName: string;
  lastName: string;
  photoUrls: string;

  constructor({firstName, lastName, photoUrls}){
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrls = photoUrls;
  }
}

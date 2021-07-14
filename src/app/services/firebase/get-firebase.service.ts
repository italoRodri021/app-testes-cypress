import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFirebaseService {

  public db = this.fireDatabase.database;
  public dataUsers = new EventEmitter();

  constructor(
    private fireDatabase: AngularFireDatabase
  ) {
    this.getUsers();
  }

  public getUsers() {

    this.db.ref('UserRegister').on('value', snapshot => {
      
      this.dataUsers.emit(snapshot.val());
     
    });

  }
}

import { GetFirebaseService } from './../../services/firebase/get-firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public listUsers: Array<any> = [];

  constructor(
    private getFirebaseService: GetFirebaseService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getDataService();
  }

  public getDataService(){

    this.getFirebaseService.dataUsers.subscribe(data => {

      this.listUsers = Object.keys(data).map(index => data[index]);
      console.log(data)
      console.log(this.listUsers)
    });
    
    
  }

}

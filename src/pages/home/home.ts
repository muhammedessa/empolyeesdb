import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase' ;



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsRef: AngularFireList<any>;
  employees: Observable<any[]>;

 imageSource  ;
  employeePhoto;



  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
   this.itemsRef =  af.list('/employees')
    this.employees = this.itemsRef.valueChanges() ;

    console.log(this.employees);

  }


getPhotoURL(image){
   firebase.storage().ref().child('images/'+ image+'.jpg').getDownloadURL().then((url)=>{
   this.employeePhoto = url;

  })
}



deleteEmployee(id){
  this.itemsRef.remove(id);
}



}

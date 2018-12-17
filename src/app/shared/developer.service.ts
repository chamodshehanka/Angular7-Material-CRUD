import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Developer} from './developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  formData: Developer;

  constructor(private firestore: AngularFirestore) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    position: new FormControl(''),
    phone: new FormControl('')
  });

  getDevelopers() {
    return this.firestore.collection('developers').snapshotChanges();
  }
}

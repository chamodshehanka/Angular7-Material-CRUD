import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required])
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      position: '',
      phone: ''
    });
  }

  getDevelopers() {
    return this.firestore.collection('developers').snapshotChanges();
  }
}

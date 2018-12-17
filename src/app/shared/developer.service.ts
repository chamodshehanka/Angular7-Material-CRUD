import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    position: new FormControl(''),
    phone: new FormControl('')
  });
}

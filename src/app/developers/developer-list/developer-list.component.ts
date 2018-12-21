import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../shared/developer.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Developer} from '../../shared/developer.model';

export interface PeriodicElement {
  name: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 'developer', symbol: 'H'},
/*  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},*/
];

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {
  list: Developer[];
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
      private service: DeveloperService,
      private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.service.getDevelopers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Developer;
      });
    });
  }

  onEdit(dev: Developer) {
    this.service.formData = Object.assign({}, dev);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('developers/' + id).delete();
    }
  }

}

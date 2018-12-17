import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../shared/developer.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor(private service: DeveloperService) { }

  ngOnInit() {
  }

}

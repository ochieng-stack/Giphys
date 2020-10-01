import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { AnyNsRecord } from 'dns';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.dataService.searchGifs(searchTerm)
     
    }
  }

}

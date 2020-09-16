import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  firstInit: boolean = true;
  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }

  public updateResult(query:string){
    this.firstInit = false;
    this.searchService.updateResult(query);
  }

}

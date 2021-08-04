import { Component, OnInit } from '@angular/core';
import { TestSearchService } from '../Service/search/test-search.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
textSearch='';
  constructor(private testsearchservice:TestSearchService) { }

  ngOnInit(): void {
this.getTextSearch();
  }
getTextSearch(){
  this.textSearch=this.testsearchservice.searchTerm.value
}
}

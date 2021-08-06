import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreComponent } from '../more/more.component';
import { DangNhapComponent } from '../dang-nhap/dang-nhap.component';
import { TestSearchService } from '../Service/search/test-search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchText = '';
  constructor(
    private dialog: MatDialog,
    private testsearchservice: TestSearchService
  ) {}

  ngOnInit(): void {}
  public showMore() {
    this.dialog.open(MoreComponent);
  }

  showLogin() {
    this.dialog.open(DangNhapComponent);
  }
  onInputs(event: any) {
    this.testsearchservice.searchTerm.next(event.target.value);
  }
  onInput(text: string) {
    this.testsearchservice.searchTerm.next(text);
  }
}

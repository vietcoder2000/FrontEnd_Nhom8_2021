import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreComponent } from '../more/more.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  public showMore() {
    this.dialog.open(MoreComponent);
  }
}

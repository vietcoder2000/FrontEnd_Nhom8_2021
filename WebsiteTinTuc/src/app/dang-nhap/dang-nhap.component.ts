import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }
closeDialog(){
    // this.dialogref.afterClosed();
  console.log(1);
}

}

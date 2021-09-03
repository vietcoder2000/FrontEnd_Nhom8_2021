import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DangNhapComponent>) {

  }

  ngOnInit(): void {

  }
  closeDialog(){
    this.dialogRef.close();
  console.log(1);
}

}

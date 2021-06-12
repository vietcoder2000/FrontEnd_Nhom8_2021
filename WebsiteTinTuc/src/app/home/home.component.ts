import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public danhMuc = ["Chính trị","Thời sự","Kinh doanh","Giải trí","Thế giới","Đời sống","Pháp luật","Thể thao","Công nghệ","Sức khỏe",'Bất động sản',"Bạn đọc","Tuần Việt Nam","Xe","Video"];
public danhMuc_link = ["chinh-tri","thoi-su","kinh-doanh","giai-tri","the-gioi","doi-song","phap-luat","the-thao","cong-nghe","suc-khoe","bat-dong-san","ban-doc","tuan-vn","xe","video"];

constructor() { }

  ngOnInit(): void {
  }

}

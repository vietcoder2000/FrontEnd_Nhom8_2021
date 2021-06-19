import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChinhTriComponent} from "./chinh-tri/chinh-tri.component";
import {BanDocComponent} from "./ban-doc/ban-doc.component";
import {BatDongSanComponent} from "./bat-dong-san/bat-dong-san.component";
import {CongNgheComponent} from "./cong-nghe/cong-nghe.component";
import {DoiSongComponent} from "./doi-song/doi-song.component";
import {GiaiTriComponent} from "./giai-tri/giai-tri.component";
import {KinhDoanhComponent} from "./kinh-doanh/kinh-doanh.component";
import {PhapLuatComponent} from "./phap-luat/phap-luat.component";
import {SucKhoeComponent} from "./suc-khoe/suc-khoe.component";
import {TheGioiComponent} from "./the-gioi/the-gioi.component";
import {TheThaoComponent} from "./the-thao/the-thao.component";
import {ThoiSuComponent} from "./thoi-su/thoi-su.component";
import {TuanVnComponent} from "./tuan-vn/tuan-vn.component";
import {VideoComponent} from "./video/video.component";
import {XeComponent} from "./xe/xe.component";
import {GiaoDucComponent} from "./giao-duc/giao-duc.component";
import { DangKyComponent } from './dang-ky/dang-ky.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path:'',component:HomeComponent },{path:'chinh-tri',component:ChinhTriComponent},{path:'ban-doc',component:BanDocComponent}
  ,{path:'bat-dong-san',component:BatDongSanComponent},{path:'cong-nghe',component:CongNgheComponent},{path:'doi-song',component:DoiSongComponent}
  ,{path:'giai-tri',component:GiaiTriComponent},{path:'kinh-doanh',component:KinhDoanhComponent},{path:'phap-luat',component:PhapLuatComponent}
  ,{path:'suc-khoe',component:SucKhoeComponent},{path:'the-gioi',component:TheGioiComponent},{path:'the-thao',component:TheThaoComponent}
  ,{path:'thoi-su',component:ThoiSuComponent},{path:'tuan-vn',component:TuanVnComponent},{path:'video',component:VideoComponent},{path:'xe',component:XeComponent}
  ,{path:'giao-duc',component:GiaoDucComponent},{path:'dangnhap',component:DangNhapComponent},{path:'dangky',component:DangKyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

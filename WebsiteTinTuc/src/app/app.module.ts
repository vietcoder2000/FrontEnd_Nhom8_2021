import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { ChinhTriComponent } from './chinh-tri/chinh-tri.component';
import { ThoiSuComponent } from './thoi-su/thoi-su.component';
import { KinhDoanhComponent } from './kinh-doanh/kinh-doanh.component';
import { GiaiTriComponent } from './giai-tri/giai-tri.component';
import { TheGioiComponent } from './the-gioi/the-gioi.component';
import { GiaoDucComponent } from './giao-duc/giao-duc.component';
import { DoiSongComponent } from './doi-song/doi-song.component';
import { PhapLuatComponent } from './phap-luat/phap-luat.component';
import { TheThaoComponent } from './the-thao/the-thao.component';
import { CongNgheComponent } from './cong-nghe/cong-nghe.component';
import { SucKhoeComponent } from './suc-khoe/suc-khoe.component';
import { BatDongSanComponent } from './bat-dong-san/bat-dong-san.component';
import { BanDocComponent } from './ban-doc/ban-doc.component';
import { TuanVnComponent } from './tuan-vn/tuan-vn.component';
import { XeComponent } from './xe/xe.component';
import { VideoComponent } from './video/video.component';

import { ContactComponent } from './footer/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    ChinhTriComponent,
    ThoiSuComponent,
    KinhDoanhComponent,
    GiaiTriComponent,
    TheGioiComponent,
    GiaoDucComponent,
    DoiSongComponent,
    PhapLuatComponent,
    TheThaoComponent,
    CongNgheComponent,
    SucKhoeComponent,
    BatDongSanComponent,
    BanDocComponent,
    TuanVnComponent,
    XeComponent,
    VideoComponent,

    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

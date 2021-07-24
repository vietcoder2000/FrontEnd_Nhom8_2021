import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
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
import { IntroduceComponent } from './footer/introduce/introduce.component';
import { MoreComponent } from './more/more.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NewRssService } from './Service/new-rss.service';
import { BanDocDetailComponent } from './ban-doc/ban-doc-detail/ban-doc-detail.component';
import { BatDongSanDetailComponent } from './bat-dong-san/bat-dong-san-detail/bat-dong-san-detail.component';
import { ChinhTriDetailComponent } from './chinh-tri/chinh-tri-detail/chinh-tri-detail.component';
import { CongNgheDetailComponent } from './cong-nghe/cong-nghe-detail/cong-nghe-detail.component';
import { DoiSongDetailComponent } from './doi-song/doi-song-detail/doi-song-detail.component';
import { GiaiTriDetailComponent } from './giai-tri/giai-tri-detail/giai-tri-detail.component';
import { GiaoDucDetailComponent } from './giao-duc/giao-duc-detail/giao-duc-detail.component';
import { KinhDoanhDetailComponent } from './kinh-doanh/kinh-doanh-detail/kinh-doanh-detail.component';
import { PhapLuatDetailComponent } from './phap-luat/phap-luat-detail/phap-luat-detail.component';
import { SucKhoeDetailComponent } from './suc-khoe/suc-khoe-detail/suc-khoe-detail.component';
import { TheGioiDetailComponent } from './the-gioi/the-gioi-detail/the-gioi-detail.component';
import { TheThaoDetailComponent } from './the-thao/the-thao-detail/the-thao-detail.component';
import { ThoiSuDetailComponent } from './thoi-su/thoi-su-detail/thoi-su-detail.component';
import { TuanVnDetailComponent } from './tuan-vn/tuan-vn-detail/tuan-vn-detail.component';
import { VideoDetailComponent } from './video/video-detail/video-detail.component';
import { XeDetailComponent } from './xe/xe-detail/xe-detail.component';
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

    ContactComponent,
      IntroduceComponent,
      MoreComponent,
      BanDocDetailComponent,
      BatDongSanDetailComponent,
      ChinhTriDetailComponent,
      CongNgheDetailComponent,
      DoiSongDetailComponent,
      GiaiTriDetailComponent,
      GiaoDucDetailComponent,
      KinhDoanhDetailComponent,
      PhapLuatDetailComponent,
      SucKhoeDetailComponent,
      TheGioiDetailComponent,
      TheThaoDetailComponent,
      ThoiSuDetailComponent,
      TuanVnDetailComponent,
      VideoDetailComponent,
      XeDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatDialogModule,HttpClientModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

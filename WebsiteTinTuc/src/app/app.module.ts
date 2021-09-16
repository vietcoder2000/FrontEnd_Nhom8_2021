import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
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

import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { ThanhVienComponent } from './thanh-vien/thanh-vien.component';
import { KhoiPhucMKComponent } from './khoi-phuc-mk/khoi-phuc-mk.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ResultSearchComponent } from './result-search/result-search.component';
import { TinMoiNongComponent } from './tin-moi-nong/tin-moi-nong.component';
import { TinMoiNongDetailComponent } from './tin-moi-nong/tin-moi-nong-detail/tin-moi-nong-detail.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { GocNhinThangComponent } from './goc-nhin-thang/goc-nhin-thang.component';
import { GocNhinThangDetailComponent } from './goc-nhin-thang/goc-nhin-thang-detail/goc-nhin-thang-detail.component';
import { TalksComponent } from './talks/talks.component';
import { TalksDetailComponent } from './talks/talks-detail/talks-detail.component';
import {TinMoiNhatComponent} from "./tin-moi-nhat/tin-moi-nhat.component";
import { TinMoiNhatDetailComponent } from './tin-moi-nhat/tin-moi-nhat-detail/tin-moi-nhat-detail.component';

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
    XeDetailComponent,

    DangNhapComponent,
    DangKyComponent,
    ThanhVienComponent,
    KhoiPhucMKComponent,

    PageNotFoundComponent,
    ResultSearchComponent,
    TinMoiNongComponent,
    TinMoiNongDetailComponent,
    GocNhinThangComponent,
    GocNhinThangDetailComponent,
    TalksComponent,
    TalksDetailComponent,
    TinMoiNhatComponent,
    TinMoiNhatDetailComponent,
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    NgxPaginationModule, ScrollingModule,MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

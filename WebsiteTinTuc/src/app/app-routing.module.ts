import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChinhTriComponent } from './chinh-tri/chinh-tri.component';
import { BanDocComponent } from './ban-doc/ban-doc.component';
import { BatDongSanComponent } from './bat-dong-san/bat-dong-san.component';
import { CongNgheComponent } from './cong-nghe/cong-nghe.component';
import { DoiSongComponent } from './doi-song/doi-song.component';
import { GiaiTriComponent } from './giai-tri/giai-tri.component';
import { KinhDoanhComponent } from './kinh-doanh/kinh-doanh.component';
import { PhapLuatComponent } from './phap-luat/phap-luat.component';
import { SucKhoeComponent } from './suc-khoe/suc-khoe.component';
import { TheGioiComponent } from './the-gioi/the-gioi.component';
import { TheThaoComponent } from './the-thao/the-thao.component';
import { ThoiSuComponent } from './thoi-su/thoi-su.component';
import { TuanVnComponent } from './tuan-vn/tuan-vn.component';
import { VideoComponent } from './video/video.component';
import { XeComponent } from './xe/xe.component';
import { GiaoDucComponent } from './giao-duc/giao-duc.component';
import { ContactComponent } from './footer/contact/contact.component';
import { IntroduceComponent } from './footer/introduce/introduce.component';
import { BanDocDetailComponent } from './ban-doc/ban-doc-detail/ban-doc-detail.component';
import { ChinhTriDetailComponent } from './chinh-tri/chinh-tri-detail/chinh-tri-detail.component';
import { BatDongSanDetailComponent } from './bat-dong-san/bat-dong-san-detail/bat-dong-san-detail.component';
import { CongNgheDetailComponent } from './cong-nghe/cong-nghe-detail/cong-nghe-detail.component';
import { DoiSongDetailComponent } from './doi-song/doi-song-detail/doi-song-detail.component';
import { GiaiTriDetailComponent } from './giai-tri/giai-tri-detail/giai-tri-detail.component';
import { KinhDoanhDetailComponent } from './kinh-doanh/kinh-doanh-detail/kinh-doanh-detail.component';
import { PhapLuatDetailComponent } from './phap-luat/phap-luat-detail/phap-luat-detail.component';
import { SucKhoeDetailComponent } from './suc-khoe/suc-khoe-detail/suc-khoe-detail.component';
import { TheGioiDetailComponent } from './the-gioi/the-gioi-detail/the-gioi-detail.component';
import { TheThaoDetailComponent } from './the-thao/the-thao-detail/the-thao-detail.component';
import { ThoiSuDetailComponent } from './thoi-su/thoi-su-detail/thoi-su-detail.component';
import { TuanVnDetailComponent } from './tuan-vn/tuan-vn-detail/tuan-vn-detail.component';
import { VideoDetailComponent } from './video/video-detail/video-detail.component';
import { XeDetailComponent } from './xe/xe-detail/xe-detail.component';
import { GiaoDucDetailComponent } from './giao-duc/giao-duc-detail/giao-duc-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'chinh-tri', component: ChinhTriComponent },
  { path: 'ban-doc', component: BanDocComponent },
  { path: 'bat-dong-san', component: BatDongSanComponent },
  { path: 'cong-nghe', component: CongNgheComponent },
  { path: 'doi-song', component: DoiSongComponent },
  { path: 'giai-tri', component: GiaiTriComponent },
  { path: 'kinh-doanh', component: KinhDoanhComponent },
  { path: 'phap-luat', component: PhapLuatComponent },
  { path: 'suc-khoe', component: SucKhoeComponent },
  { path: 'the-gioi', component: TheGioiComponent },
  { path: 'the-thao', component: TheThaoComponent },
  { path: 'thoi-su', component: ThoiSuComponent },
  { path: 'tuan-vn', component: TuanVnComponent },
  { path: 'video', component: VideoComponent },
  { path: 'xe', component: XeComponent },
  { path: 'giao-duc', component: GiaoDucComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'introduce', component: IntroduceComponent },
  { path: 'ban-doc-detail', component: BanDocDetailComponent },
  { path: 'chinh-tri-detail', component: ChinhTriDetailComponent },
  { path: 'bat-dong-san-detail', component: BatDongSanDetailComponent },
  { path: 'cong-nghe-detail', component: CongNgheDetailComponent },
  { path: 'doi-song-detail', component: DoiSongDetailComponent },
  { path: 'giai-tri-detail', component: GiaiTriDetailComponent },
  { path: 'kinh-doanh-detail', component: KinhDoanhDetailComponent },
  { path: 'phap-luat-detail', component: PhapLuatDetailComponent },
  { path: 'suc-khoe-detail', component: SucKhoeDetailComponent },
  { path: 'the-gioi-detail', component: TheGioiDetailComponent },
  { path: 'the-thao-detail', component: TheThaoDetailComponent },
  { path: 'thoi-su-detail', component: ThoiSuDetailComponent },
  { path: 'tuan-vn-detail', component: TuanVnDetailComponent },
  { path: 'video-detail', component: VideoDetailComponent },
  { path: 'xe-detail', component: XeDetailComponent },
  { path: 'giao-duc-detail', component: GiaoDucDetailComponent },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

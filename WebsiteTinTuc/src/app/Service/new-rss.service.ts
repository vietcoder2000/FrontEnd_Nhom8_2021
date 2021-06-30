import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class NewRssService {

  constructor(private http:HttpClient) {
   }
  public GetRssDoiSong() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/doi-song.rss', requestOptions));

  }
  public GetRssGiaiTri() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/giai-tri.rss', requestOptions));

  }
  public GetRssGiaoDuc() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/giao-duc.rss', requestOptions));

  }
  public GetRssKinhDoanh() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/kinh-doanh.rss', requestOptions));

  }
  public GetRssPhapLuat() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/phap-luat.rss', requestOptions));

  }
  public GetRssTalks() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/talkshow.rss', requestOptions));

  }
  public GetRssTheGioi() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/the-gioi.rss', requestOptions));

  }
  public GetRssThoiSu() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get('https://vietnamnet.vn/rss/thoi-su.rss', requestOptions));

  }





   public GetRssChinhTri() {
     const requestOptions: Object = {
       observe: "body",
       responseType: "text"
     };
     return(this.http
       .get<any>('https://vietnamnet.vn/rss/thoi-su-chinh-tri.rss', requestOptions));

   }
   public GetRssXe() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/oto-xe-may.rss', requestOptions));

  }public GetRssTuanVietNam() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/tuanvietnam.rss', requestOptions));

  }public GetRssTinMoiNong() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('https://vietnamnet.vn/rss/tin-moi-nong.rss', requestOptions));

  }public GetRssTinMoiNhat() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/tin-moi-nhat.rss', requestOptions));

  }public GetRssTheThao() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/the-thao.rss', requestOptions));

  }public GetRssSucKhoe() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/suc-khoe.rss', requestOptions));

  }public GetRssGocNhinThang() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/goc-nhin-thang.rss', requestOptions));

  }public GetRssCongNghe() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/cong-nghe.rss', requestOptions));

  }public GetRssBatDongSan() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/bat-dong-san.rss', requestOptions));

  }public GetRssBanDoc() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return(this.http
      .get<any>('	https://vietnamnet.vn/rss/ban-doc.rss', requestOptions));

  }

 }


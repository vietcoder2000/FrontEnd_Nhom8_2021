import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewRssService {
  constructor(private http:HttpClient) {
   }
   public GetRssChinhTri() {
     const requestOptions: Object = {
       observe: "body",
       responseType: "text"
     };
     return(this.http
       .get('https://vietnamnet.vn/rss/thoi-su-chinh-tri.rss', requestOptions));

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
 }


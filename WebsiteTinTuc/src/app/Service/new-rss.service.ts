import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewRssService {
  constructor(private http: HttpClient) {}
  public GetRssDoiSong() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/doi-song.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssGiaiTri() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/giai-tri.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssGiaoDuc() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/giao-duc.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssKinhDoanh() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/kinh-doanh.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssPhapLuat() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/phap-luat.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssTalks() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/talkshow.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssTheGioi() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/the-gioi.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssThoiSu() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get(
      'https://vietnamnet.vn/rss/thoi-su.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssChinhTri() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/thoi-su-chinh-tri.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssXe() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/oto-xe-may.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssTuanVietNam() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/tuanvietnam.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssTinMoiNong() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/tin-moi-nong.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssTinMoiNhat() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http
      .get<any>('https://vietnamnet.vn/rss/tin-moi-nhat.rss', requestOptions)
      .pipe(catchError(this.handleError));
  }
  public GetRssTheThao(): Observable<any> {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      '\thttps://vietnamnet.vn/rss/the-thao.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssSucKhoe() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/suc-khoe.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssGocNhinThang() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/goc-nhin-thang.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssCongNghe() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/cong-nghe.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssBatDongSan() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/bat-dong-san.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  public GetRssBanDoc() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    return this.http.get<any>(
      'https://vietnamnet.vn/rss/ban-doc.rss',
      requestOptions
    ).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    return throwError('Something bad happened; please try again later.');
  }
}

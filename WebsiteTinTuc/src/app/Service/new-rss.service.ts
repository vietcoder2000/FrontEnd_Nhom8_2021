import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rss } from '../RssServer/Rss';
import * as xml2js from 'xml2js';
@Injectable({
  providedIn: 'root'
})
export class NewRssService {
  RssData: Rss|any;
  constructor(private http:HttpClient) {
   }
   public GetRssFeedData() {
     const requestOptions: Object = {
       observe: "body",
       responseType: "text"
     };
     return(this.http
       .get('https://vietnamnet.vn/rss/thoi-su-chinh-tri.rss', requestOptions));

   }
 }


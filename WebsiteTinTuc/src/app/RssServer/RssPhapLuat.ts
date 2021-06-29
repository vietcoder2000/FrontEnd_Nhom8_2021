

export interface AppRss {
  rss: RssPhapLuat;
}
export interface RssPhapLuat {
  channel: Array<RssChannel>;
}
export interface RssChannel {
  lastBuildDate: Date;
  title: Array<string>;
  description: Array<string>;
  link: Array<string>;
  item: Array<RssItem>;

}

export interface RssItem {
  guid: any;
  link: Array<string>;
  pubDate: Date;
  category: Array<string>;
  title: Array<string>;
  description: Array<string>;
  // media:Content;
}
export interface RssImage {
  link: Array<string>;
  title: Array<string>;
  url: Array<string>;
}



export interface AppRss {
  rss: RssTheThao;
}
export interface RssTheThao {
  $: any;
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
  encoded:Array<string>
  content: Array<RssImage>;
}
export interface RssImage {
  medium: string;
  url: Array<string>;
  height:string;
}



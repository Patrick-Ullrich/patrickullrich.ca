/// <reference types="next" />
/// <reference types="next/types/global" />

interface BlogMeta {
  title: string;
  date: string;
  slug: string;
  author: string;
  keywords: string[];
  description: string;
  id: string;
  bannerUrl: string;
  readTimeEstimate: string;
  discuss: string;
  draft?: boolean;
}

interface Blog {
  meta: BlogMeta;
  content: any;
}

/// <reference types="next" />
/// <reference types="next/types/global" />

interface BlogMeta {
  title: string;
  date: Date;
  slug: string;
  author: string;
  keywords: string[];
  description: string;
  id: string;
}

interface Blog {
  meta: BlogMeta;
  content: any;
}

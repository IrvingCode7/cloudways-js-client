export interface SearchKnowledgeBaseParameters {
  kb_title: string;
}

export interface KnowledgeBaseArticle {
  guid: string;
  post_title: string;
}

export interface SearchKnowledgeBaseResponse {
  articles: KnowledgeBaseArticle[];
  articles_found: number;
  status: number;
}

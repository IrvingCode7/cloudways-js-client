import { apiCall } from "../core";

/**
 * Search for queries in the Knowledge Base.
 * @param {string} query The string to search in the Knowledge Base.
 * @returns {Promise<{ articles: { guid: string, post_title: string }[], articles_found: number, status: number }>} A promise resolving with the search results.
 */
export function searchKnowledgeBase(query: string): Promise<{
  articles: { guid: string; post_title: string }[];
  articles_found: number;
  status: number;
}> {
  const endpoint = `/kb/search?kb_title=${encodeURIComponent(query)}`;
  return apiCall(endpoint);
}

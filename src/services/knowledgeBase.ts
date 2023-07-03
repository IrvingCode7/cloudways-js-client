import axios, { AxiosResponse } from "axios";

import {
  SearchKnowledgeBaseParameters,
  SearchKnowledgeBaseResponse,
} from "../types/knowledgeBase";
import { getAccessToken } from "./authentication";

const baseURL = "https://api.cloudways.com/api/v1";

export async function searchKnowledgeBase(
  params: SearchKnowledgeBaseParameters
): Promise<SearchKnowledgeBaseResponse> {
  const accessToken = await getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const response: AxiosResponse = await axios.get(`${baseURL}/kb/search`, {
    params,
  });
  return response.data;
}

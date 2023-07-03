import axios, { AxiosResponse } from "axios";

import {
  SearchKnowledgeBaseParameters,
  SearchKnowledgeBaseResponse,
} from "../types/knowledgeBase.js";
import { getAccessToken } from "./authentication";

const baseURL = "https://api.cloudways.com/api/v1";
// replace this with your actual access token
const accessToken = getAccessToken();

axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
const knowledgeBase = {
  // Existing functions...

  search: async (
    params: SearchKnowledgeBaseParameters
  ): Promise<SearchKnowledgeBaseResponse> => {
    const response: AxiosResponse = await axios.get(`${baseURL}/kb/search`, {
      params,
    });
    return response.data;
  },
};

module.exports = knowledgeBase;

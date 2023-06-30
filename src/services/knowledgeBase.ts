import axios, { AxiosResponse } from "axios";

import {
  SearchKnowledgeBaseParameters,
  SearchKnowledgeBaseResponse,
} from "../types/knowledgeBase";
const baseURL = "https://api.cloudways.com/api/v1";

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

export default knowledgeBase;

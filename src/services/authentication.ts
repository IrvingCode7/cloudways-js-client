import axios, { AxiosResponse } from "axios";
import {
  GetOAuthAccessTokenRequest,
  GetOAuthAccessTokenResponse,
} from "../types/authentication.js";

const baseURL = "https://api.cloudways.com/api/v1";

const authentication = {
  getOAuthAccessToken: async (
    requestData: GetOAuthAccessTokenRequest
  ): Promise<GetOAuthAccessTokenResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/oauth/access_token`,
      requestData
    );
    return response.data;
  },
};

export default authentication;

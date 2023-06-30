import axios, { AxiosResponse } from "axios";
import {
  GetOAuthAccessTokenRequest,
  GetOAuthAccessTokenResponse,
} from "../types/authentication.js";

const baseURL = "https://api.cloudways.com/api/v1";

let accessToken: string | null = null;
let lastCredentials: GetOAuthAccessTokenRequest | null = null;
let tokenExpirationTimestamp: number | null = null;

const authentication = {
  getOAuthAccessToken: async (
    params: GetOAuthAccessTokenRequest
  ): Promise<GetOAuthAccessTokenResponse> => {
    const response: AxiosResponse = await axios.post(
      `${baseURL}/oauth/access_token`,
      params
    );
    accessToken = response.data.access_token; // Store the access token
    tokenExpirationTimestamp = Date.now() + response.data.expires_in * 1000; // Set the expiration timestamp
    lastCredentials = params; // Store the last provided credentials
    return response.data;
  },
};

export default authentication;

export const getAccessToken = async () => {
  if (
    accessToken &&
    tokenExpirationTimestamp &&
    Date.now() < tokenExpirationTimestamp
  ) {
    return accessToken; // Return the existing access token if it's still valid
  } else if (lastCredentials) {
    await authentication.getOAuthAccessToken(lastCredentials); // Obtain a new access token using the last provided credentials
    return accessToken;
  } else {
    throw new Error("Access token expired and no last credentials provided.");
  }
};

import axios, { AxiosResponse } from "axios";

/** API Token to be used for authorization */
let apiToken: string | null = null;

/** Expiry time for the API token */
let tokenExpiration: number | null = null;

/** Email address of the user */
let userEmail: string | null = null;

/** API key for the user */
let apiKey: string | null = null;

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

/**
 * Authenticate user for future API calls
 * @param email - Email address used for Cloudways Platform
 * @param key - API Key generated on Cloudways Platform API Section
 */
export function authenticate(email: string, key: string): void {
  userEmail = email;
  apiKey = key;
}

/**
 * Get a new API token for authorization
 * @throws {Error} if library is not initialized
 * @private
 */
async function getNewToken(): Promise<void> {
  if (!userEmail || !apiKey) {
    throw new Error(
      "Library not initialized. Call initialize(email, apiKey) first."
    );
  }

  try {
    const response: AxiosResponse = await axios.post(
      "https://api.cloudways.com/api/v1/oauth/access_token",
      {
        email: userEmail,
        api_key: apiKey,
      }
    );

    apiToken = response.data.access_token;
    tokenExpiration = Date.now() + (response.data.expires_in - 300) * 1000;
  } catch (error) {
    console.error("Error getting new token:", error);
  }
}

/**
 * Make an API call
 * @param endpoint - The API endpoint to call
 * @param method - The HTTP method to use (default: HttpMethod.GET)
 * @param data - The data to send in the request (if applicable)
 * @returns {Promise<any>} - Promise resolving to the API response data
 * @throws {Error} if API call fails
 */
export async function apiCall(
  endpoint: string,
  method: HttpMethod = HttpMethod.GET,
  data: any = null
): Promise<any> {
  if (apiToken === null || Date.now() >= (tokenExpiration ?? 0)) {
    await getNewToken();
  }

  if (apiToken === null) {
    throw new Error("No API token available.");
  }

  try {
    const response: AxiosResponse = await axios({
      url: endpoint,
      method,
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      data,
    });
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw new Error("API call failed");
  }
}

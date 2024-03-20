/**
 * Represents the request parameters for getting an OAuth access token.
 */
export interface GetOAuthAccessTokenRequest {
  /**
   * The email address used to access the Cloudways Platform.
   */
  email: string;

  /**
   * The API key generated on the Cloudways Platform API Section.
   */
  api_key: string;
}

/**
 * Represents the response received after successfully obtaining an OAuth access token.
 */
export interface GetOAuthAccessTokenResponse {
  /**
   * The access token used for authorization in subsequent API calls.
   */
  access_token: string;

  /**
   * The type of the token, typically "Bearer".
   */
  token_type: "Bearer";

  /**
   * The number of seconds until the access token expires due to inactivity.
   */
  expires_in: number;
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface AuthToken {
  token: string;
  expiration: number;
}

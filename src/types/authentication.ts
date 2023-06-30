// types/authentication.ts
export interface GetOAuthAccessTokenRequest {
  email: string;
  api_key: string;
}

export interface GetOAuthAccessTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

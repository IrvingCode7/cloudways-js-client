/**
 * Represents the request parameters for getting an OAuth access token.
 */
interface GetOAuthAccessTokenRequest {
    /**
     * The email address used to access the Cloudways Platform.
     */
    email: string;
    /**
     * The API key generated on the Cloudways Platform API Section.
     */
    api_key: string;
}
declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

/**
 * Initialize the Cloudways API with user configuration.
 * @param userConfig - User configuration for Cloudways API access.
 */
declare function initializeCloudwaysApi(userConfig: GetOAuthAccessTokenRequest): void;
/**
 * Make an API call to Cloudways API.
 * @param endpoint - The API endpoint to call.
 * @param method - The HTTP method to use (default: HttpMethod.GET).
 * @param data - The data to send in the request (if applicable).
 * @returns {Promise<any>} - Promise resolving to the API response data.
 * @throws {Error} if the API call fails.
 */
declare function apiCall(endpoint: string, method?: HttpMethod, data?: any): Promise<any>;

export { apiCall, initializeCloudwaysApi };

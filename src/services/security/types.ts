/**
 * Interface representing the response structure for creating DNS records.
 */
export interface DnsResponse {
    wildcard_ssl: {
        message: string;
        status: boolean;
        wildcard: {
            app_prefix: string;
            auto: boolean;
            is_installed: boolean;
            is_verified: boolean;
            ssl_domains: string[];
            ssl_email: string;
            type: string;
        };
    };
}





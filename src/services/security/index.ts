import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type { DnsResponse } from "./types";
import { getAndWaitForOperationStatusCompleted } from "../operation";
import type { OperationStatus } from "../operation/types";
/**
 * Allows access to Adminer on a specific server.
 * @param {number} serverId - The ID of the server where access to Adminer will be allowed.
 * @param {string} ip - The IP address that will be allowed to access Adminer on the server.
 * @returns {Promise<void>} A promise that resolves when the request to allow access to Adminer is completed.
 * @example
 * ```
 * {}
 *
 * ```
 */
export function allowAdminer(serverId: number, ip: string): Promise<void> {
  const data = {
    server_id: serverId,
    ip_address: ip,
  };
  // Make the API request to allow access to Adminer
  return apiCall("/security/adminer", HttpMethod.POST, data);
}

/**
 * Allows access to SIAB on a specific server.
 * @param {number} serverId - The ID of the server where access to SIAB will be allowed.
 * @param {string} ip - The IP address that will be allowed to access SIAB on the server.
 * @returns {Promise<void>} A promise that resolves when the request to allow access to SIAB is completed.
 * * @example
 * ```
 * {}
 *
 * ```
 */
export function allowSiab(serverId: number, ip: string): Promise<void> {
  const data = {
    server_id: serverId,
    ip_address: ip,
  };
  // Make the API request to allow access to SIAB
  return apiCall("/security/siab", HttpMethod.POST, data);
}

/**
 * Changes the auto-renewal policy for Let's Encrypt certificates on a specific server and application.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application for which the auto-renewal policy will be changed.
 * @param {boolean} auto - A boolean value indicating whether auto-renewal should be enabled (true) or disabled (false).
 * @returns {Promise<void>} A promise that resolves when the request to change the auto-renewal policy is completed.
 * @example
 * ```
 * {}
 *
 * ```
 */
export function changeAutoRenewalPolicy(
  serverId: number,
  appId: number,
  auto: boolean
): Promise<void> {
  const data = {
    server_id: serverId,
    app_id: appId,
    auto: auto,
  };
  // Make the API request to change the auto-renewal policy
  return apiCall("/security/lets_encrypt_auto", HttpMethod.POST, data);
}

/**
 * Checks if an IP address is blacklisted on a specific server.
 * @param {number} serverId - The ID of the server to check.
 * @param {string} ip - The IP address to check.
 * @returns {Promise<boolean>} A promise that resolves to true if the IP is blacklisted, and false otherwise.
 * @example
 * {
    "ip_status" : false
    }
 */
export function checkIfIpBlacklist(
  serverId: number,
  ip: string
): Promise<boolean> {
  const data = {
    server_id: serverId,
    ip_adress: ip,
  };
  return apiCall("/security/isBlacklisted", HttpMethod.GET, data).then(
    (response) => response.ip_status
  );
}

/**
 * Gets the list of whitelisted IPs for MySQL connections on a specific server.
 * @param {number} serverId - The ID of the server to retrieve the whitelisted IPs from.
 * @returns {Promise<string[]>} A promise that resolves to an array of whitelisted IP addresses for MySQL connections.
 * @example
 * {
  "ip_list" : [ "1.1.1.1" ]
    }
 */
export function getWhitelistedIpsMysqlConnections(
  serverId: number
): Promise<string[]> {
  const data = {
    server_id: serverId,
  };

  // Make the API request to get the whitelisted IPs for MySQL connections
  return apiCall("/security/whitelistedIpsMysql", HttpMethod.GET, data).then(
    (response) => response.ip_list
  );
}

/**
 * Retrieves the list of whitelisted IPs for SSH/SFTP connections on a specific server.
 * @param {number} serverId - The ID of the server to retrieve the whitelisted IPs from.
 * @returns {Promise<string[]>} A promise that resolves to an array of whitelisted IP addresses for SSH/SFTP connections.
 * @example
 * {
  "ip_list" : [ "1.1.1.1" ]
    }
 */
export function getWhiteListedIpsForSshSftp(
  serverId: number
): Promise<string[]> {
  const data = {
    server_id: serverId,
  };

  // Make the API request to get the whitelisted IPs for SSH/SFTP connections
  return apiCall("/security/whitelistedIpsMysql", HttpMethod.GET, data).then(
    (response) => response.ip_list
  );
}

/**
 * Creates DNS records for a specified server and application, especially when using wildcard certificates.
 * @param {number} serverId - The ID of the server where the DNS records will be created.
 * @param {number} appId - The ID of the application for which DNS records will be created.
 * @param {string} sslEmail - The email attached to the certificate.
 * @param {boolean} wildCard - Indicates whether the certificate is a wildcard certificate.
 * @param {string} sslDomain - The domain name(s) to be protected with a single certificate.
 * @returns {Promise<DnsResponse>} A promise that resolves to the response containing information about the created DNS records.
 * @example
 * ```
 * {
  "wildcard_ssl": {
        "message":"Succefully DNS created",
        "status":true,
        "wildcard": {
            "app_prefix":"woocommerce-111-160.cloudwaysapps.com",
            "auto":true,
            "is_installed":false,
            "is_verified":false,
            "ssl_domains":["xyz.com"],
            "ssl_email":"example@gmail.com",
            "type":"wc"
        }
  }
}
 * ```
 */
export function createDns(
  serverId: number,
  appId: number,
  sslEmail: string,
  wildCard: boolean,
  sslDomain: string
): Promise<DnsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    ssl_email: sslEmail,
    wild_card: wildCard,
    ssl_domain: sslDomain,
  };
  return apiCall("/security/createDNS", HttpMethod.POST, data).then(
    (response) => {
      // Map the relevant data from the response to the CreateDnsResponse format
      return {
        wildcard_ssl: {
          message: response.wildcard_ssl.message,
          status: response.wildcard_ssl.status,
          wildcard: {
            app_prefix: response.wildcard_ssl.wildcard.app_prefix,
            auto: response.wildcard_ssl.wildcard.auto,
            is_installed: response.wildcard_ssl.wildcard.is_installed,
            is_verified: response.wildcard_ssl.wildcard.is_verified,
            ssl_domains: response.wildcard_ssl.wildcard.ssl_domains,
            ssl_email: response.wildcard_ssl.wildcard.ssl_email,
            type: response.wildcard_ssl.wildcard.type,
          },
        },
      };
    }
  );
}

/**
 * Verifies DNS records for a specified server and application, especially when using wildcard certificates.
 * @param {number} serverId - The ID of the server where the DNS records will be verified.
 * @param {number} appId - The ID of the application for which DNS records will be verified.
 * @param {string} sslEmail - The email attached to the certificate.
 * @param {boolean} wildCard - Indicates whether the certificate is a wildcard certificate.
 * @param {string} sslDomain - The domain name(s) to be protected with a single certificate.
 * @returns {Promise<DnsResponse>} A promise that resolves to the response containing information about the verified DNS records.
 * @example
 * ```
 * {
  "wildcard_ssl": {
        "message":"Your domain is mapped, kindly proceed",
        "status":true,
        "wildcard": {
            "app_prefix":"woocommerce-111-160.cloudwaysapps.com",
            "auto":true,
            "is_installed":false,
            "is_verified":false,
            "ssl_domains":["xyz.com"],
            "ssl_email":"example@gmail.com",
            "type":"wc"
        }
  }
}
 * ```
 */
export function verifyDns(
  serverId: number,
  appId: number,
  sslEmail: string,
  wildCard: boolean,
  sslDomain: string
): Promise<DnsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    ssl_email: sslEmail,
    wild_card: wildCard,
    ssl_domain: sslDomain,
  };

  return apiCall("/security/verifyDNS", HttpMethod.POST, data).then(
    (response) => {
      // Map the relevant data from the response to the VerifyDnsResponse format
      return {
        wildcard_ssl: {
          message: response.wildcard_ssl.message,
          status: response.wildcard_ssl.status,
          wildcard: {
            app_prefix: response.wildcard_ssl.wildcard.app_prefix,
            auto: response.wildcard_ssl.wildcard.auto,
            is_installed: response.wildcard_ssl.wildcard.is_installed,
            is_verified: response.wildcard_ssl.wildcard.is_verified,
            ssl_domains: response.wildcard_ssl.wildcard.ssl_domains,
            ssl_email: response.wildcard_ssl.wildcard.ssl_email,
            type: response.wildcard_ssl.wildcard.type,
          },
        },
      };
    }
  );
}



/**
 * Installs Let's Encrypt SSL certificates for a specified server and application.
 * @param {number} serverId - The ID of the server where Let's Encrypt SSL will be installed.
 * @param {number} appId - The ID of the application for which Let's Encrypt SSL will be installed.
 * @param {string} sslEmail - The email attached to the Let's Encrypt SSL certificate.
 * @param {boolean} wildCard - Indicates whether the Let's Encrypt SSL certificate is a wildcard certificate.
 * @param {string[]} sslDomains - An array of domain names to be protected with Let's Encrypt SSL.
 * @returns {Promise<OperationStatus>} A promise that resolves to the ID of the operation.
 * @example
 * ```{
  "operation_id" : 12345
    }```
 */
export async function installLetsEncrypt(
  serverId: number,
  appId: number,
  sslEmail: string,
  wildCard: boolean,
  sslDomains: string[]
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    ssl_email: sslEmail,
    wild_card: wildCard,
    ssl_domains: sslDomains,
  };
  const req = await apiCall("/security/lets_encrypt_install", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}



/**
 * Manually renews Let's Encrypt SSL certificates for a specified server and application.
 * @param {number} serverId - The ID of the server where Let's Encrypt SSL will be renewed.
 * @param {number} appId - The ID of the application for which Let's Encrypt SSL will be renewed.
 * @param {boolean} wildCard - Indicates whether the Let's Encrypt SSL certificate is a wildcard certificate.
 * @param {string} domain - The domain name for which Let's Encrypt SSL will be renewed.
 * @returns {Promise<OperationStatus>} A promise that resolves to the ID of the operation.
 * @example
 * ```{
  "operation_id" : 12345
    }```
 */
export async function renewLetsEncryptManually(
    serverId: number,
    appId: number,
    wildCard: boolean,
    domain: string
): Promise<OperationStatus>{
    const data ={
        server_id: serverId,
        app_id: appId,
        wild_card: wildCard,
        domain_name: domain,
    };
    const req = await apiCall("/security/lets_encrypt_manual_renew", HttpMethod.POST, data);
    return await getAndWaitForOperationStatusCompleted(req.operation_id);
}



/**
 * Revokes Let's Encrypt SSL certificates for a specified server and application.
 * @param {number} serverId - The ID of the server from which Let's Encrypt SSL will be revoked.
 * @param {number} appId - The ID of the application for which Let's Encrypt SSL will be revoked.
 * @param {boolean} wildCard - Indicates whether the Let's Encrypt SSL certificate is a wildcard certificate.
 * @param {string} ssl_domain - The domain name for which Let's Encrypt SSL will be revoked.
 * @returns {Promise<OperationStatus>} A promise that resolves to the ID of the operation.
 * @example
 * ```{
  "operation_id" : 12345
    }```
 */
export async function revokeLetsEncrypt(
    serverId: number,
    appId: number,
    wildCard: boolean,
    ssl_domain: string
): Promise<OperationStatus>{
    const data = {
        server_id: serverId,
        app_id: appId,
        wild_card: wildCard,
        Ssl_domain: ssl_domain,
    };
    const req = await apiCall("/security/lets_encrypt_revoke", HttpMethod.POST, data);
    return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


/**
 * SSL certificate and key for a specified server and application.
 * @param {number} serverId - The ID of the server where the SSL certificate will be installed.
 * @param {number} appId - The ID of the application for which the SSL certificate will be installed.
 * @param {string} sslCertificate - The custom SSL certificate to be installed.
 * @param {string} sslKey - The corresponding SSL key for the custom certificate.
 * @returns {Promise<void>} A promise that resolves when the installation process is completed successfully.
 * @example
 *  {}
 */
export function ownSslCertificate(
    serverId : number,
    appId : number,
    sslCertificate : string,
    sslKey : string
):Promise<void>{
    const data = {
        server_id : serverId,
        app_id : appId,
        ssl_crt : sslCertificate,
        ssl_key : sslKey
    };
    return apiCall("/security/own_ssl", HttpMethod.POST, data);
}



/**
 * Removes a custom SSL certificate for a specified server and application.
 * @param {number} serverId - The ID of the server from which the custom SSL certificate will be removed.
 * @param {number} appId - The ID of the application for which the custom SSL certificate will be removed.
 * @returns {Promise<OperationStatus>} A promise that resolves to the ID of the operation.
 * @example
 * ```
 * {
 * "operation_id": 12345
 * }
 * ```
 */
export async function removeOwnSslCertificate(
    serverId : number,
    appId : number,
):Promise<OperationStatus>{
    const data = {
        server_id : serverId,
        app_id : appId
    };
    const req = await apiCall("/security/removeCustomSSL", HttpMethod.DELETE, data);
    return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


export function updateWhitelistedIps(
    serverId: number,
    ipPolicy : string, //"allow_all" or "block_all(only for sftp)"
    tab : string, //"sftp " or "mysql"
    Ips : string[],
    type_connection : string 
):Promise<void>{
    const data = {
        server_id : serverId,
        ip_policy : ipPolicy,
        tab : tab,
        ips : Ips,
        type : type_connection
    };
    return apiCall("/security/whitelisted", HttpMethod.POST, data);
}






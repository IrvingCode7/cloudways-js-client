import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import { getAndWaitForOperationStatusCompleted } from "../operation";
import type { OperationStatus } from "../operation/types";
import type {
  cloudflareDetailsResponse,
  setupCloudflareResponse,
  FetchTxtRecordsResponse,
  getSmartCachePurgeResponse,
  getcloudflareSettingsResponse,
  GetCloudflareCacheAnalyticsResponse,
  GetCloudflareSecurityAnalyticsResponse,
} from "./types.ts";

/**
 * Retrieves Cloudflare details for a specific application on a server.
 * @param {number} serverId - The ID of the server.
 * @param {number} appId - The ID of the application.
 * @returns {Promise<cloudflareDetailsResponse>} A promise that resolves to the Cloudflare details for the application.
 * @example
 * {
  "status": true,
  "dns": [
    {
      "app_id": "1234",
      "hostname": "test1.com",
      "hostname_id": "342a8843-d86e-4005-adcb-3gc469e45f69",
      "bandwidth": "1",
      "status": "pending"
    },
    {
      "app_id": "1234",
      "hostname": "test2.com",
      "hostname_id": "342a8843-d86e-4005-adcb-3gc469e45f69",
      "bandwidth": "1",
      "status": "verified"
    },
  ],
  "mode": null,
  "SP": []
}  
 */
export function getCloudflareDetails(
  serverId: number,
  appId: number
): Promise<cloudflareDetailsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/cloudflareCdn", HttpMethod.GET, data).then(
    (response) => response as cloudflareDetailsResponse
  );
}

/**
 * Sets up Cloudflare for a specific application on a server.
 * @param {number} serverId - The ID of the server.
 * @param {number} appId - The ID of the application.
 * @param {string} domain - The domain to set up Cloudflare for.
 * @returns {Promise<setupCloudflareResponse>} A promise that resolves to the response indicating the setup of Cloudflare for the application.
 * @example 
 * {
  "status": true,
  "operation": {
    "id": "12345",
    "type": "create_cf_cdn",
    "server_id": "12345",
    "cluster_id": "0",
    "estimated_time_remaining": "0",
    "customer_id": "123",
    "frontend_step_number": "1",
    "status": "Operation completed",
    "is_completed": "1",
    "message": "Operation completed",
    "app_id": "12345",
    "app_label": "Test App",
    "data": []
  }
} 
 */
export function setUpCloudflareforYourApp(
  serverId: number,
  appId: number,
  domain: string
): Promise<setupCloudflareResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    domain: domain,
  };
  return apiCall("/app/cloudflareCdn", HttpMethod.POST, data).then(
    (response) => response as setupCloudflareResponse
  );
}

/**
 * Sets up Cloudflare for a specific application on a server.
 * @param {number} serverId - The ID of the server.
 * @param {number} appId - The ID of the application.
 * @param {string} domain - The domain for which to fetch TXT records.
 * @returns {Promise<FetchTxtRecordsResponse>} A promise that resolves to the response containing TXT records for the specified domain.
 * @example
 * {
  "status": true,
  "txt_records": {
    "ownership_verification": {
      "status": "pending",
      "txt_name": "test.com",
      "txt_value": "ca3-2361fd71e07440288be9d6a08d298018"
    },
    "ownership_verification_http": {
      "type": "txt",
      "name": "_cf-custom-hostname.test.com",
      "value": "28acecb5-e2c2-4d87-a2d4-292836786dbf"
    }
  }
}
 */
export function fetchTxtRecords(
  serverId: number,
  appId: number,
  domain: string
): Promise<FetchTxtRecordsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    domain: domain,
  };
  return apiCall("/app/cloudflareCdn/fetchTXT", HttpMethod.GET, data).then(
    (response) => response as FetchTxtRecordsResponse
  );
}

/**
 * Deletes specified domains from Cloudflare CDN for a specific application on a server.
 * @param {number} serverId - The ID of the server.
 * @param {number} appId - The ID of the application.
 * @param {string[]} domains - An array of domains to be deleted.
 * @param {number} customerId - The ID of the customer.
 * @returns {Promise<OperationStatus>} A promise that resolves to an object containing the operation ID.
 * @example
 * {
  "operation_id": 12345
}
 */
export async function deleteDomain(
  serverId: number,
  appId: number,
  domains: string[],
  customerId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    domains: domains,
    customer_id: customerId,
  };
  const req = await apiCall("/app/cloudflareCdn/delete", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Transfers specified domains from one application to another application on different servers using Cloudflare CDN.
 * @param {number} serverId - The ID of the source server.
 * @param {number} appId - The ID of the source application.
 * @param {string[]} domains - An array of domains to be transferred.
 * @param {number} dest_server_id - The ID of the destination server.
 * @param {number} dest_app_id - The ID of the destination application.
 * @returns {Promise<OperationStatus>} A promise that resolves to an object containing the operation ID.
 * @example
 * {
  "operation_id": 12345
}
 */
export async function transferDomain(
  serverId: number,
  appId: number,
  domains: string[],
  dest_server_id: number,
  dest_app_id: number
): Promise<OperationStatus>{
  const data = {
    server_id: serverId,
    app_id: appId,
    domains: domains,
    dest_server_id: dest_server_id,
    est_app_id: dest_app_id,
  };
  const req = await apiCall(
    "/app/cloudflareCdn/transferDomain",
    HttpMethod.POST,
    data
  );
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Purges the cache for a specified domain associated with a Cloudflare CDN configuration.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @param {number} customerId - The ID of the customer.
 * @returns {Promise<OperationStatus>} A promise that resolves to an object containing the operation ID.
 * @example
 * {
  "operation_id": 12345
}
 */
export async function purgeDomain(
  serverId: number,
  appId: number,
  customerId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    customer_id: customerId,
  };
  const req = await apiCall("/app/cloudflareCdn/purgeDomain", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Retrieves DNS query information for a specified domain associated with a Cloudflare CDN configuration.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @param {string} domain - The domain for which DNS query information is requested.
 * @returns {Promise<{ status: boolean, primary_domain: boolean, primary_domain_name: string }>} A promise that resolves to an object containing the DNS query information.
 * @example
 * {
  "status": true,
  "primary_domain": true,
  "primary_domain_name": "test.com"
}
 */
export function getDnsQuery(
  serverId: number,
  appId: number,
  domain: string
): Promise<{
  status: boolean;
  primary_domain: boolean;
  primary_domain_name: string;
}> {
  const data = {
    server_id: serverId,
    app_id: appId,
    domain: domain,
  };
  return apiCall("/app/cloudflareCdn/getDnsQuery", HttpMethod.GET, data).then(
    (response) => ({
      status: response.status,
      primary_domain: response.primary_domain,
      primary_domain_name: response.primary_domain_name,
    })
  );
}

/**
 * Verifies TXT records for a specified domain associated with a Cloudflare CDN configuration.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @param {string} domain - The domain for which TXT records are to be verified.
 * @returns {Promise<{ status: boolean, domain_status: string }>} A promise that resolves to an object containing the verification status of TXT records for the domain.
 * @example
 * {
    "status": true,
    "domain_status": "activated"
}
 */
export function verifyTxtRecords(
  serverId: number,
  appId: number,
  domain: string
): Promise<{ status: boolean; domain_status: string }> {
  const data = {
    server_id: serverId,
    app_id: appId,
    domain: domain,
  };
  return apiCall(
    "/app/cloudflareCdn/verifyTxtRecords",
    HttpMethod.POST,
    data
  ).then((response) => ({
    status: response.status,
    domain_status: response.domain_status,
  }));
}

/**
 * Retrieves the status of the Smart Cache Purge for a specific application on a server.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @returns {Promise<getSmartCachePurgeResponse>} A promise that resolves to an object containing the status of the Smart Cache Purge.
 * @example
 * {
    "status": true,
    "data": {
      "deployed": true
      }
    }
 */
export function getSmartCachePurgeStatus(
  serverId: number,
  appId: number
): Promise<getSmartCachePurgeResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall(
    "/app/cloudflareCdn/checkFPCStatus",
    HttpMethod.GET,
    data
  ).then((response) => response as getSmartCachePurgeResponse);
}

/**
 * Configures Smart Cache Purge for a specific application on a server.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @returns {Promise<OperationStatus>} A promise that resolves to an object containing the status of the configuration and the operation ID.
 * @example
 * {
      "status": true,
      "operation_id": 106318
    } 
 */
export async function configureSmartCachePurge(
  serverId: number,
  appId: number
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  const req = await apiCall("/app/cloudflareCdn/deployFPC", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Retrieves Cloudflare settings for a specific application on a server.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @returns {Promise<getcloudflareSettingsResponse>} A promise that resolves to the Cloudflare settings response.
 * @example
 * {
      "status": true,
      "data": {
      "setting": {
      "min_tls_version": "1.2",
      "early_hints": "off",
      "tls_1_3": "on"
      },
      "custom_metadata": {
      "mirage": false,
      "polish": "off",
      "webp": false,
      "minify_js": false,
      "minify_css": false,
      "minify_html": false,
      "scrapeshield": false,
      "caching": true,
      "edgecaching": true,
      "ua_mode": "false"
      }
     }    
   }
 */
export function getClouflareSettings(
  serverId: number,
  appId: number
): Promise<getcloudflareSettingsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
  };
  return apiCall("/app/cloudflareCdn/appSetting", HttpMethod.GET, data).then(
    (response) => response as getcloudflareSettingsResponse
  );
}

/**
 * Updates Cloudflare settings for a specific application on a server.
 * @param {number} serverId - The ID of the server where the application is hosted.
 * @param {number} appId - The ID of the application.
 * @param {boolean} caching - Specifies whether caching is enabled.
 * @param {string} early_hints - The setting for early hints.
 * @param {boolean} edgecaching - Specifies whether edge caching is enabled.
 * @param {string} image_optimization - The setting for image optimization.
 * @param {boolean} minification - Specifies whether minification is enabled.
 * @param {boolean} mobile_optimization - Specifies whether mobile optimization is enabled.
 * @param {boolean} scrapeshield - Specifies whether scrapeshield is enabled.
 * @returns {Promise<OperationStatus>} A promise that resolves to the status and operation ID of the update operation.
 * @example
 * {  
          "status": true,
          "operation_id": 12345    
          } 
 */
export async function updateCloudflareSettings(
  serverId: number,
  appId: number,
  caching: boolean,
  early_hints: string,
  edgecaching: boolean,
  image_optimization: string,
  minification: boolean,
  mobile_optimization: boolean,
  scrapeshield: boolean
): Promise<OperationStatus> {
  const data = {
    server_id: serverId,
    app_id: appId,
    caching: caching,
    early_hints: early_hints,
    edgecaching: edgecaching,
    image_optimization: image_optimization,
    minification: minification,
    mobile_optimization: mobile_optimization,
    scrapeshield: scrapeshield,
  };
  const req = await apiCall("/app/cloudflareCdn/appSetting", HttpMethod.POST, data);
  return await getAndWaitForOperationStatusCompleted(req.operation_id);
}

/**
 * Retrieves Cloudflare cache analytics for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {number} mins - The minutes parameter.
 * @returns {Promise<GetCloudflareCacheAnalyticsResponse>} A Promise that resolves with the Cloudflare cache analytics response.
 * @example
 * {
        "status": true,
        "data": [
            {
                "cachStatus": [
                    {
                        "count": 15,
                        "dimensions": {
                            "cacheStatus": "dynamic"
                        },
                        "sum": {
                            "edgeResponseBytes": 200386
                        }
                    },
                ],
                "servedByCloudflare": [
                    {
                        "count": 1,
                        "dimensions": {
                            "ts": "2023-12-31T20:36:00Z"
                        },
                        "sum": {
                            "edgeResponseBytes": 61328
                        }
                    },
                ],
                "servedByEdge": [
                    {
                        "count": 4,
                        "dimensions": {
                            "ts": "2024-01-02T15:00:00Z"
                        },
                        "sum": {
                            "edgeResponseBytes": 21591
                        }
                    },
                ],
                "servedByOrigin": [
                    {
                        "count": 1,
                        "dimensions": {
                            "ts": "2023-12-31T16:00:00Z"
                        },
                        "sum": {
                            "edgeResponseBytes": 1571
                        }
                    },
                ],
                "topAsn": [
                    {
                        "count": 1639,
                        "dimensions": {
                            "clientASNDescription": "CYBERNET-AP Cyber Internet Services Pvt Ltd.",
                            "metric": "9541"
                        },
                        "sum": {
                            "edgeResponseBytes": 31187129
                        }
                    },
                ],
                "topContentTypes": [
                    {
                        "count": 567,
                        "dimensions": {
                            "metric": "js"
                        },
                        "sum": {
                            "edgeResponseBytes": 8552975
                        }
                    },
                ],
                "topCountries": [
                    {
                        "count": 87,
                        "dimensions": {
                            "metric": "US"
                        },
                        "sum": {
                            "edgeResponseBytes": 824561
                        }
                    },
                ],
                "topDeviceTypes": [
                    {
                        "count": 23,
                        "dimensions": {
                            "metric": "mobile"
                        },
                        "sum": {
                            "edgeResponseBytes": 339977
                        }
                    },
                ],
                "topEdgeStatusCodes": [
                    {
                        "count": 48,
                        "dimensions": {
                            "metric": 404
                        },
                        "sum": {
                            "edgeResponseBytes": 1874638
                        }
                    },
                ],
                "topHosts": [
                    {
                        "count": 1891,
                        "dimensions": {
                            "metric": "staging2.thecloudkeeper.io"
                        },
                        "sum": {
                            "edgeResponseBytes": 34314359
                        }
                    }
                ],
                "topHttpMethods": [
                    {
                        "count": 80,
                        "dimensions": {
                            "metric": "POST"
                        },
                        "sum": {
                            "edgeResponseBytes": 31800
                        }
                    },
                ],
                "topIPs": [
                    {
                        "count": 153,
                        "dimensions": {
                            "metric": "149.210.166.197"
                        },
                        "sum": {
                            "edgeResponseBytes": 2242001
                        }
                    },
                ],
                "topQueryStrings": [
                    {
                        "count": 39,
                        "dimensions": {
                            "metric": "?ver=1565817311"
                        },
                        "sum": {
                            "edgeResponseBytes": 65157
                        }
                    },
                ],
                "topUriPaths": [
                    {
                        "count": 1,
                        "dimensions": {
                            "metric": "/blog"
                        },
                        "sum": {
                            "edgeResponseBytes": 810
                        }
                    },
                ],
                "topUserAgent": [
                    {
                        "count": 1,
                        "dimensions": {
                            "metric": "Cloudflare-Purge/2.0"
                        },
                        "sum": {
                            "edgeResponseBytes": 1253
                        }
                    },
                ],
                "total": [
                    {
                        "avg": {
                            "sampleInterval": 2.9593114241001564
                        },
                        "count": 1891,
                        "sum": {
                            "edgeResponseBytes": 34314359
                        }
                    }
                ],
                "totalServedByCloudflare": [
                    {
                        "count": 1057,
                        "sum": {
                            "edgeResponseBytes": 15136193
                        }
                    }
                ],
                "totalServedByOrigin": [
                    {
                        "count": 410,
                        "sum": {
                            "edgeResponseBytes": 7902966
                        }
                    }
                ]
            }
        ]
    }
 */
export function getCloudflareCacheAnalytics(
  serverId: number,
  appId: number,
  mins: number
): Promise<GetCloudflareCacheAnalyticsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    mins: mins,
  };
  return apiCall(
    `/app/cloudflare/${appId}/analytics`,
    HttpMethod.GET,
    data
  ).then((response) => response as GetCloudflareCacheAnalyticsResponse);
}

/**
 * Retrieves Cloudflare security analytics for a specific server and application.
 * @param {number} serverId - The numeric ID of the server.
 * @param {number} appId - The numeric ID of the application.
 * @param {number} mins - The number of minutes for which analytics data is requested.
 * @returns {Promise<GetCloudflareSecurityAnalyticsResponse>} A promise that resolves to the response containing Cloudflare security analytics.
 */
export function getClouflareSecurityAnalytics(
  serverId: number,
  appId: number,
  mins: number
): Promise<GetCloudflareSecurityAnalyticsResponse> {
  const data = {
    server_id: serverId,
    app_id: appId,
    mins: mins,
  };
  return apiCall(
    `/app/cloudflare/${appId}/security`,
    HttpMethod.GET,
    data
  ).then((response) => response as GetCloudflareSecurityAnalyticsResponse);
}

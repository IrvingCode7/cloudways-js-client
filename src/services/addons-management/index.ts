import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type {
  ActivateAddonAccountLevelResponse,
  DeactivateAnAddonResponse,
  AddonsListResponse,
  UpgradeAddonResponse,
  ElasticEmailDomainsResponse,
  verifyEmailDomainResponse,
} from "./types";

/**
 * Activates an add-on on a specified server, especially applicable for SMTP add-ons.
 * @param {number} serverId - The numeric ID of the server where the add-on will be activated.
 * @param {number} addonId - The numeric ID of the add-on to be activated.
 * @param {string} username - The username required for SMTP add-ons.
 * @param {string} password - The password required for SMTP add-ons.
 * @param {string} mode - The mode required for SMTP add-ons. Allowed values are 'enable' or 'update'.
 * @param {string} provider - The SMTP provider to be selected.
 * @param {string} host - The host required for SMTP add-ons.
 * @param {string} port - The port required for SMTP add-ons.
 * @returns {Promise<void>} A promise that resolves when the add-on is successfully activated.
 * @example
 * ```
 * []
 *
 * ```
 */
export function activateAddOnServer(
  serverId: number,
  addonId: number,
  username: string,
  password: string,
  mode: string,
  provider: string,
  host: string,
  port: string
): Promise<void> {
  const data = {
    server_id: serverId,
    addon_id: addonId,
    username: username,
    password: password,
    mode: mode,
    provider: provider,
    host: host,
    port: port,
  };
  return apiCall("/addon/activateOnServer", HttpMethod.POST, data);
}

/**
 * Activates an addon on the account level.
 * @param {number} addonId - The numeric ID of the addon to be activated.
 * @param {number} packageId - The package ID. Not necessary in case of SMTP addon.
 * @returns {Promise<ActivateAddonAccountLevelResponse>} A promise that resolves to the response containing information about the activated addon.
 * @example
 * {
  "message" : "Your Own SMTP has been successfully enabled.",
  "sub" : {
    "id_user_addons" : "1234",
    "status" : "1",
    "id_package" : null
  }
}
 */
export function activateAddonOnAccountLevel(
  addonId: number,
  packageId: number
): Promise<ActivateAddonAccountLevelResponse> {
  const data = {
    addon_id: addonId,
    package_id: packageId,
  };

  return apiCall("/addon/activate", HttpMethod.POST, data).then((response) => {
    return {
      message: response.message,
      sub: {
        id_user_addons: response.sub.id_user_addons,
        status: response.sub.status,
        id_package: response.sub.id_package,
      },
    };
  });
}

/**
 * Requests an addon for a specific application.
 * @param {number} addonId - The numeric ID of the addon to be requested.
 * @param {number} serverId - The numeric ID of the server where the application resides.
 * @param {number} appId - The numeric ID of the application to which the addon will be added.
 * @param {number} version - The desired version of the application. Required only for Application Upgradation Add-on.
 * @returns {Promise<void>} A promise that resolves when the addon request is successful.
 * @example
 * ```
 * []
 *
 * ```
 */
export function addonRequestForApplication(
  addonId: number,
  serverId: number,
  appId: number,
  version: number
): Promise<void> {
  const data = {
    addon_id: addonId,
    server_id: serverId,
    app_id: appId,
    version: version,
  };
  return apiCall("/addon/request", HttpMethod.POST, data);
}

/**
 * Deactivates an addon on a specified server.
 * @param {number} serverId - The numeric ID of the server where the addon will be deactivated.
 * @param {number} addonId - The numeric ID of the addon to be deactivated.
 * @returns {Promise<void>} A promise that resolves when the addon deactivation is successful.
 * @example
 * ```
 * []
 *
 * ```
 */
export function deactivateAddOnYourServer(
  serverId: number,
  addonId: number
): Promise<void> {
  const data = {
    server_id: serverId,
    addon_id: addonId,
  };
  return apiCall("/addon/deactivateOnServer", HttpMethod.POST, data);
}

/**
 * Deactivates an addon on the specified server.
 * @param {number} serverId - The ID of the server where the addon will be deactivated.
 * @param {number} addonId - The ID of the addon to deactivate.
 * @returns {Promise<DeactivateAnAddonResponse>} A promise that resolves to the response containing information about the deactivated addon.
 * @example
 * ```
 * {
  "message" : "Your Own SMTP has been successfully deactivated.",
  "sub" : {
    "id_user_addons" : "1234",
    "status" : 0
  }
}
 * ```
 */
export function deactivateAnAddon(
  addonId: number
): Promise<DeactivateAnAddonResponse> {
  const data = {
    addon_id: addonId,
  };
  return apiCall("/addon/deactivate", HttpMethod.POST, data).then(
    (response) => {
      return {
        message: response.message,
        sub: {
          id_user_addons: response.sub.id_user_addons,
          status: response.sub.status,
        },
      };
    }
  );
}

/**
 * Retrieve the list of addons from the Cloudways API.
 * @returns {Promise<AddonsListResponse>} - Promise resolving to the list of addons.
 */
export function getAddonsList(): Promise<AddonsListResponse> {
  return apiCall("/addon", HttpMethod.GET).then(
    (response: any) => response as AddonsListResponse
  );
}

/**
 * Upgrade an addon package.
 * @param addonId - The numeric id of the addon.
 * @param packageId - The ID of the package to subscribe to.
 * @returns {Promise<UpgradeAddonResponse>} - Promise resolving to the response of upgrading an addon package.
 * @example
 * {
  "message" : "DNS Made Easy request has been successfully received. Our 24/7 support will contact you in a while with further details.",
  "sub" : {
    "id_user_addons" : "1234",
    "status" : "2",
    "id_package" : "7"
  }
}
 * 
 */
export function upgradeAddonPackage(
  addonId: number,
  packageId: number
): Promise<UpgradeAddonResponse> {
  const data = {
    addon_id: addonId,
    package_id: packageId,
  };

  return apiCall("/addon/upgrade", HttpMethod.POST, data).then((response) => {
    return {
      message: response.message,
      sub: {
        id_user_addons: response.sub.id_user_addons,
        status: response.sub.status,
        id_package: response.sub.id_package,
      },
    };
  });
}

/**
 * Get the list of Elastic Email domains.
 * @returns {Promise<ElasticEmailDomainsResponse>} - Promise resolving to the response containing domain details.
 * @example
 * {
 *   "status": true,
 *   "data": {
 *       "domains": [
 *           {
 *              "domain": "indoorplants.pk",
 *              "spf": false,
 *              "mx": true,
 *              "dkim": false,
 *              "dmarc": false,
 *              "tracking": false
 *           }
 *       ]
 *   }
 * }
 */
export function getElasticEmailDomains(): Promise<ElasticEmailDomainsResponse> {
  return apiCall("/addon/elastic/domains", HttpMethod.GET).then((response) => {
    return {
      status: response.status,
      data: {
        domains: [
          {
            domain: response.data.domain,
            spf: response.data.spf,
            mx: response.data.mx,
            dkim: response.data.dkim,
            dmarc: response.data.dmarc,
            tracking: response.data.tracking,
          },
        ],
      },
    };
  });
}

/**
 * Verify an Elastic Email domain.
 * @param {string} domain - The domain to verify.
 * @returns {Promise<verifyEmailDomainResponse>} - Promise resolving to the response of verifying the domain.
 * @example
 * {
  "status": true,
  "data": {
      "domain": "indoorplants.pk",
      "spf": false,
      "mx": true,
      "dkim": false,
      "dmarc": false,
      "tracking": false
  }
}
 */
export function verifyElasticEmailDomain(
  domain: string
): Promise<verifyEmailDomainResponse> {
  const data = {
    domain: domain,
  };
  return apiCall("/addon/elastic/verify_domain", HttpMethod.POST, data).then(
    (response) => {
      return {
        status: response.status,
        data: {
          domain: response.data.domain,
          spf: response.data.spf,
          mx: response.data.mx,
          dkim: response.data.dkim,
          dmarc: response.data.dmarc,
          tracking: response.data.tracking,
        },
      };
    }
  );
}


/**
 * Deletes an Elastic Email domain.
 * @param {string} domain - The domain to delete.
 * @returns {Promise<{status: boolean, message: string}>} - A promise that resolves to an object containing the status and message of the deletion.
 * @example
 * {
  "status": true,
  "message": "Domain successfully deleted"
}
 */
export function deleteElasticEmailDomain(domain: string): Promise<{status: boolean, message : string}> {
  const data = {
    domain: domain,
  };
  return apiCall("/addon/elastic/domain", HttpMethod.DELETE, data).then(
    (response) => ({
      status: response.status,
      message: response.message,
    })
  );
}

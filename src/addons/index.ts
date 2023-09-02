import { HttpMethod, apiCall } from "../auth";

/**
 * @interface AddonPackage
 * @description Interface for the packages related to an addon.
 */
interface AddonPackage {
  id_package: string;
  id_addons: string;
  package_name: string;
  period: string;
  package_price: string;
  addon_limit: string;
  sort_order: string;
}

/**
 * @interface Addon
 * @description Interface for the structure of each addon.
 */
interface Addon {
  id: string;
  label: string;
  custom_field_1: string | null;
  name: string;
  external_link: string;
  vendor: string;
  binding: string;
  form: string;
  incompatible: string | null;
  view_type: string;
  sort_order: string;
  packages: Record<string, AddonPackage>;
}

/**
 * @interface GetAllAddonsResponse
 * @description Interface for the response when fetching all addons.
 */
interface GetAllAddonsResponse {
  addons: Record<string, Addon>;
}

/**
 * @interface ActivateAddonOnServerPayload
 * @description Interface for payload needed to activate an addon on a server.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {string} username - Username required for SMTP addon.
 * @property {string} password - Password required for SMTP addon.
 * @property {"enable" | "update"} mode - Mode required for SMTP addon.
 * @property {string} provider - SMTP provider.
 * @property {string} host - Host required for SMTP addon.
 * @property {string} port - Port required for SMTP addon.
 */
interface ActivateAddonOnServerPayload {
  server_id: number;
  addon_id: number;
  username: string;
  password: string;
  mode: "enable" | "update";
  provider: string;
  host: string;
  port: string;
}

/**
 * Activate an addon on a server.
 * @param {ActivateAddonOnServerPayload} payload - The payload for activating an addon on a server.
 * @returns {Promise<any>} A promise that resolves when the addon has been activated.
 */

/**
 * @interface ActivateAddonOnAccountPayload
 * @description Interface for payload needed to activate an addon at account level.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {number | null} package_id - Package ID, not required for SMTP addon.
 */
interface ActivateAddonOnAccountPayload {
  addon_id: number;
  package_id?: number | null;
}

/**
 * @interface ActivateAddonOnAccountResponse
 * @description Interface for the response received when activating an addon at account level.
 * @property {string} message - A success message.
 * @property {object} sub - Sub-object containing details.
 */
interface ActivateAddonOnAccountResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: string;
    id_package: null | string;
  };
}

/**
 * Activate an addon at the account level.
 * @param {ActivateAddonOnAccountPayload} payload - The payload for activating an addon.
 * @returns {Promise<ActivateAddonOnAccountResponse>} A promise that resolves to an ActivateAddonOnAccountResponse object.
 */

/**
 * @interface ActivateAddonOnAccountPayload
 * @description Interface for payload needed to activate an addon at account level.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {number | null} package_id - Package ID, not required for SMTP addon.
 */
interface ActivateAddonOnAccountPayload {
  addon_id: number;
  package_id?: number | null;
}

/**
 * @interface ActivateAddonOnAccountResponse
 * @description Interface for the response received when activating an addon at account level.
 * @property {string} message - A success message.
 * @property {object} sub - Sub-object containing details.
 */
interface ActivateAddonOnAccountResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: string;
    id_package: null | string;
  };
}

/**
 * Activate an addon at the account level.
 * @param {ActivateAddonOnAccountPayload} payload - The payload for activating an addon.
 * @returns {Promise<ActivateAddonOnAccountResponse>} A promise that resolves to an ActivateAddonOnAccountResponse object.
 */

/**
 * @interface AddonRequestPayload
 * @description Interface for payload needed to request an addon for an application.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the application.
 * @property {number} version - Desired version of the application, required for Application Upgradation Add-on.
 */
interface AddonRequestPayload {
  addon_id: number;
  server_id: number;
  app_id: number;
  version: number;
}

/**
 * Request an addon for an application.
 * @param {AddonRequestPayload} payload - The payload for requesting an addon for an application.
 * @returns {Promise<any>} A promise that resolves when the addon request is successful.
 */

/**
 * @interface AddonRequestPayload
 * @description Interface for payload needed to request an addon for an application.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the application.
 * @property {number} version - Desired version of the application, required for Application Upgradation Add-on.
 */
interface AddonRequestPayload {
  addon_id: number;
  server_id: number;
  app_id: number;
  version: number;
}

/**
 * Request an addon for an application.
 * @param {AddonRequestPayload} payload - The payload for requesting an addon for an application.
 * @returns {Promise<any>} A promise that resolves when the addon request is successful.
 */

/**
 * @interface AddonRequestPayload
 * @description Interface for payload needed to request an addon for an application.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} app_id - Numeric ID of the application.
 * @property {number} version - Desired version of the application, required for Application Upgradation Add-on.
 */
interface AddonRequestPayload {
  addon_id: number;
  server_id: number;
  app_id: number;
  version: number;
}

/**
 * Request an addon for an application.
 * @param {AddonRequestPayload} payload - The payload for requesting an addon for an application.
 * @returns {Promise<any>} A promise that resolves when the addon request is successful.
 */

/**
 * @interface DeactivateAddonOnServerPayload
 * @description Interface for payload needed to deactivate an addon on a server.
 * @property {number} server_id - Numeric ID of the server.
 * @property {number} addon_id - Numeric ID of the addon.
 */
interface DeactivateAddonOnServerPayload {
  server_id: number;
  addon_id: number;
}

/**
 * Deactivate an addon on a server.
 * @param {DeactivateAddonOnServerPayload} payload - The payload for deactivating an addon on a server.
 * @returns {Promise<any>} A promise that resolves when the addon has been deactivated.
 */

/**
 * @interface DeactivateAddonPayload
 * @description Interface for payload needed to deactivate an addon.
 * @property {number} addon_id - Numeric ID of the addon.
 */
interface DeactivateAddonPayload {
  addon_id: number;
}

/**
 * @interface DeactivateAddonResponse
 * @description Interface for the response received when deactivating an addon.
 * @property {string} message - A success message.
 * @property {object} sub - Sub-object containing details.
 */
interface DeactivateAddonResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: number;
  };
}

/**
 * Deactivate an addon.
 * @param {DeactivateAddonPayload} payload - The payload for deactivating an addon.
 * @returns {Promise<DeactivateAddonResponse>} A promise that resolves to a DeactivateAddonResponse object.
 */

/**
 * @interface UpgradeAddonPackagePayload
 * @description Interface for payload needed to upgrade an addon package.
 * @property {number} addon_id - Numeric ID of the addon.
 * @property {number} package_id - ID of package that needs to be subscribed.
 */
interface UpgradeAddonPackagePayload {
  addon_id: number;
  package_id: number;
}

/**
 * @interface UpgradeAddonPackageResponse
 * @description Interface for the response received when upgrading an addon package.
 * @property {string} message - A success message.
 * @property {object} sub - Sub-object containing details.
 */
interface UpgradeAddonPackageResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: string;
    id_package: string;
  };
}

/**
 * Upgrade an addon package.
 * @param {UpgradeAddonPackagePayload} payload - The payload for upgrading an addon package.
 * @returns {Promise<UpgradeAddonPackageResponse>} A promise that resolves to an UpgradeAddonPackageResponse object.
 */

/**
 * @interface ElasticEmailDomain
 * @description Interface for Elastic Email Domain properties.
 */
interface ElasticEmailDomain {
  domain: string;
  spf: boolean;
  mx: boolean;
  dkim: boolean;
  dmarc: boolean;
  tracking: boolean;
}

/**
 * @interface ListElasticEmailDomainsResponse
 * @description Interface for the response received when listing Elastic Email Domains.
 * @property {boolean} status - Status of the request.
 * @property {object} data - Data containing array of domains.
 */
interface ListElasticEmailDomainsResponse {
  status: boolean;
  data: {
    domains: ElasticEmailDomain[];
  };
}

/**
 * List Elastic Email Domains.
 * @returns {Promise<ListElasticEmailDomainsResponse>} A promise that resolves to a ListElasticEmailDomainsResponse object.
 */

// Same as ListElasticEmailDomainsResponse & ElasticEmailDomain, you can reuse those.

/**
 * Verify Elastic Email Domain.
 * @param {string} domain - Domain to be verified.
 * @returns {Promise<ListElasticEmailDomainsResponse>} A promise that resolves to a ListElasticEmailDomainsResponse object.
 */

/**
 * @interface DeleteElasticEmailDomainResponse
 * @description Interface for the response received when deleting an Elastic Email Domain.
 * @property {boolean} status - Status of the request.
 * @property {string} message - A success message.
 */
interface DeleteElasticEmailDomainResponse {
  status: boolean;
  message: string;
}

/**
 * Delete Elastic Email Domain.
 * @param {string} domain - Domain to be deleted.
 * @returns {Promise<DeleteElasticEmailDomainResponse>} A promise that resolves to a DeleteElasticEmailDomainResponse object.
 */

export async function activateAddonOnServer(
  payload: ActivateAddonOnServerPayload
): Promise<any> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/activateOnServer";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response;
}

export async function activateAddonOnAccount(
  payload: ActivateAddonOnAccountPayload
): Promise<ActivateAddonOnAccountResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/activate";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response as ActivateAddonOnAccountResponse;
}

export async function addonRequestForApplication(
  payload: AddonRequestPayload
): Promise<any> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/request";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response;
}

export async function deactivateAddonOnServer(
  payload: DeactivateAddonOnServerPayload
): Promise<any> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/deactivateOnServer";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response;
}

export async function deactivateAddon(
  payload: DeactivateAddonPayload
): Promise<DeactivateAddonResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/deactivate";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response;
}

export async function upgradeAddonPackage(
  payload: UpgradeAddonPackagePayload
): Promise<UpgradeAddonPackageResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/upgrade";
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method, payload);
  return response;
}

export async function listElasticEmailDomains(): Promise<ListElasticEmailDomainsResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/addon/elastic/domains";
  const method = HttpMethod.GET;
  const response = await apiCall(endpoint, method);
  return response;
}

export async function verifyElasticEmailDomain(
  domain: string
): Promise<ListElasticEmailDomainsResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/addon/elastic/verify_domain?domain=${domain}`;
  const method = HttpMethod.POST;
  const response = await apiCall(endpoint, method);
  return response;
}

export async function deleteElasticEmailDomain(
  domain: string
): Promise<DeleteElasticEmailDomainResponse> {
  const endpoint = `https://api.cloudways.com/api/v1/addon/elastic/domain?domain=${domain}`;
  const method = HttpMethod.DELETE;
  const response = await apiCall(endpoint, method);
  return response;
}

/**
 * Fetch all available add-ons.
 * @returns {Promise<GetAllAddonsResponse>} A promise that resolves to an object containing all add-ons.
 */
export async function getAllAddons(): Promise<GetAllAddonsResponse> {
  const endpoint = "https://api.cloudways.com/api/v1/addon";
  const method = HttpMethod.GET;
  const response = await apiCall(endpoint, method);
  return response as GetAllAddonsResponse;
}

export interface ActivateAddOnOnServerRequest {
  server_id: number;
  addon_id: number;
  username: string;
  password: string;
  mode: string;
  provider: string;
  host: string;
  port: string;
}

// The response for this request is an empty array, so we can use any[].
export type ActivateAddOnOnServerResponse = any[];

export interface ActivateAddOnAccountLevelRequest {
  addon_id: number;
  package_id: number;
}

export interface ActivateAddOnAccountLevelResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: string;
    id_package: string | null;
  };
}

export interface AddOnRequestForApplicationRequest {
  addon_id: number;
  server_id: number;
  app_id: number;
  version: number;
}

// The response for this request is an empty array, so we can use any[].
export type AddOnRequestForApplicationResponse = any[];

export interface DeactivateAddOnOnServerRequest {
  server_id: number;
  addon_id: number;
}

// The response for this request is an empty array, so we can use any[].
export type DeactivateAddOnOnServerResponse = any[];

export interface DeactivateAddonRequest {
  addon_id: number;
}

export interface DeactivateAddonResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: number;
  };
}

export interface AddonPackage {
  id_package: string;
  id_addons: string;
  package_name: string;
  period: string;
  package_price: string;
  addon_limit: string;
  sort_order: string;
}

export interface Addon {
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

export interface GetAddonsListResponse {
  addons: Record<string, Addon>;
}

export interface UpgradeAddonPackageParameters {
  addon_id: number;
  package_id: number;
}

export interface UpgradeAddonPackageResponse {
  message: string;
  sub: {
    id_user_addons: string;
    status: string;
    id_package: string;
  };
}

export interface ElasticEmailDomain {
  domain: string;
  spf: boolean;
  mx: boolean;
  dkim: boolean;
  dmarc: boolean;
  tracking: boolean;
}

export interface ListElasticEmailDomainsResponse {
  status: boolean;
  data: {
    domains: ElasticEmailDomain[];
  };
}

export interface VerifyElasticEmailDomainParameters {
  domain: string;
}

export interface VerifyElasticEmailDomainResponse {
  status: boolean;
  data: ElasticEmailDomain;
}

export interface DeleteElasticEmailDomainParameters {
  domain: string;
}

export interface DeleteElasticEmailDomainResponse {
  status: boolean;
  message: string;
}

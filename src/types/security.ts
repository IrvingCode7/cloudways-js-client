export interface AllowAdminerParameters {
  server_id: number;
  ip: string;
}

export interface AllowAdminerResponse {}

export interface AllowSIABParameters {
  server_id: number;
  ip: string;
}

export interface AllowSIABResponse {}

export interface ChangeAutoRenewalPolicyParameters {
  server_id: number;
  app_id: number;
  auto: boolean;
}

export interface ChangeAutoRenewalPolicyResponse {}

export interface CheckIPBlacklistedParameters {
  server_id: number;
  ip: string;
}

export interface CheckIPBlacklistedResponse {
  ip_status: boolean;
}

export interface CreateCSRCertificateParameters {
  server_id: number;
  app_id: number;
  ssl_country: string;
  ssl_state: string;
  ssl_locality: string;
  ssl_organization: string;
  ssl_organizational_unit: string;
  ssl_email: string;
  ssl_domain: string;
  ssl_san: boolean;
  domains: string[];
}

export interface CreateCSRCertificateResponse {}

export interface GetCSRCertificateParameters {
  server_id: number;
  app_id: number;
}

export interface GetCSRCertificateResponse {
  csr: string;
}

export interface GetWhitelistedIPsMySQLParameters {
  server_id: number;
}

export interface GetWhitelistedIPsMySQLResponse {
  ip_list: string[];
}

export interface GetWhitelistedIPsSSHParameters {
  server_id: number;
}

export interface GetWhitelistedIPsSSHResponse {
  ip_list: string[];
}

export interface CreateDNSParameters {
  server_id: number;
  app_id: number;
  ssl_email: string;
  wild_card: boolean;
  ssl_domain: string;
}

export interface CreateDNSResponse {
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

export interface VerifyDNSParameters {
  server_id: number;
  app_id: number;
  ssl_email: string;
  wild_card: boolean;
  ssl_domain: string;
}

export interface VerifyDNSResponse {
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

export interface InstallLetsEncryptParameters {
  server_id: number;
  app_id: number;
  ssl_email: string;
  wild_card: boolean;
  ssl_domains: string[];
}

export interface InstallLetsEncryptResponse {
  operation_id: number;
}

export interface RenewLetsEncryptManuallyParameters {
  server_id: number;
  app_id: number;
  wild_card: boolean;
  domain: string;
}

export interface RenewLetsEncryptManuallyResponse {
  operation_id: number;
}

export interface RevokeLetsEncryptParameters {
  server_id: number;
  app_id: number;
  wild_card: boolean;
  ssl_domain: string;
}

export interface RevokeLetsEncryptResponse {
  operation_id: number;
}

export interface UpdateSSLCertificateParameters {
  server_id: number;
  app_id: number;
  ssl_crt: string;
  ca_crt: string;
}

export interface UpdateSSLCertificateResponse {}

export interface OwnSSLCertificateParameters {
  server_id: number;
  app_id: number;
  ssl_crt: string;
  ssl_key: string;
}

export interface OwnSSLCertificateResponse {}

export interface RemoveOwnSSLCertificateParameters {
  server_id: number;
  app_id: number;
}

export interface RemoveOwnSSLCertificateResponse {
  operation_id: number;
}

export interface UpdateWhitelistedIPsParameters {
  server_id: number;
  ipPolicy: "allow_all" | "block_all";
  tab: "sftp" | "mysql";
  ip: string[];
  type: string;
}

export interface UpdateWhitelistedIPsResponse {}

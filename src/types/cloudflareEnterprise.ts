export interface GetCloudflareDetailsParameters {
  server_id: number;
  app_id: number;
}

export interface DNS {
  app_id: string;
  hostname: string;
  hostname_id: string;
  bandwidth: string;
  status: string;
}

export interface GetCloudflareDetailsResponse {
  status: boolean;
  dns: DNS[];
  mode: null;
  SP: any[];
}

export interface SetupCloudflareParameters {
  server_id: number;
  app_id: number;
  domain: string;
}

export interface SetupCloudflareResponse {
  status: boolean;
  operation: {
    id: string;
    type: string;
    server_id: string;
    cluster_id: string;
    estimated_time_remaining: string;
    customer_id: string;
    frontend_step_number: string;
    status: string;
    is_completed: string;
    message: string;
    app_id: string;
    app_label: string;
    data: any[];
  };
}

export interface DeleteDomainParameters {
  server_id: number;
  app_id: number;
  domains: string[];
  customer_id: number;
}

export interface DeleteDomainResponse {
  operation_id: number;
}

export interface TransferDomainParameters {
  server_id: number;
  app_id: number;
  domains: string[];
  dest_server_id: number;
  dest_app_id: number;
}

export interface TransferDomainResponse {
  operation_id: number;
}

export interface PurgeDomainParameters {
  server_id: number;
  app_id: number;
  customer_id: number;
}

export interface PurgeDomainResponse {
  operation_id: number;
}

export interface SetCacheModeParameters {
  server_id: number;
  app_id: number;
  customer_id: number;
  mode: string;
}

export interface SetCacheModeResponse {
  operation_id: number;
}

export interface GetDnsQueryParameters {
  server_id: number;
  app_id: number;
  domain: string;
}

export interface GetDnsQueryResponse {
  status: boolean;
  primary_domain: boolean;
  primary_domain_name: string;
}

export interface VerifyTxtRecordsParameters {
  server_id: number;
  app_id: number;
  domain: string;
  customer_id: number;
}

export interface VerifyTxtRecordsResponse {
  status: boolean;
  domain_status: string;
}

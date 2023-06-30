// types/server.ts

export interface AttachStorageParameters {
  server_id: number;
  server_storage: number;
}

export interface AttachStorageResponse {
  operation_id: number;
}

export interface CloneServerParameters {
  source_server_id: number;
  cloud: string;
  region: string;
  instance_type: string;
  app_label: string;
  application_id?: number;
  db_volume_size?: number;
  data_volume_size?: number;
  server_storage?: number;
  advance_clone?: boolean;
  server_settings?: boolean;
  app_domains?: boolean;
  app_crons?: boolean;
  app_supervisor_jobs?: boolean;
  app_settings?: boolean;
  app_credentials?: boolean;
  team_access?: boolean;
}

export interface CloneServerResponse {
  operation_id: number;
}

export interface CreateServerParameters {
  cloud: string;
  region: string;
  instance_type: string;
  application: string;
  app_version: string;
  server_label: string;
  app_label: string;
  project_name?: string;
  db_volume_size?: number;
  data_volume_size?: number;
}

export interface CreateServerResponse {
  server: {
    id: string;
    label: string;
    status: string;
    tenant_id: string;
    backup_frequency: string;
    local_backups: string | boolean;
    is_terminated: string;
    created_at: string;
    updated_at: string;
    cloud: string;
    region: string;
    zone: string | null;
    instance_type: string;
    db_volume_size: number | null;
    data_volume_size: number | null;
    server_fqdn: string;
    public_ip: string;
    volume_size: string;
    master_user: string;
    master_password: string;
    platform: string;
    ssh_keys: string[];
    addons: string[];
    operations: {
      id: string;
      type: string;
      server_id: string;
      estimated_time_remaining: string;
      frontend_step_number: string;
      status: string;
      is_completed: string;
      message: string;
    }[];
  };
}

export interface DeleteServerParameters {
  serverId: number;
}

export interface DeleteServerResponse {
  operation_id: number;
}

export interface DiskUsageResponse {
  status: boolean;
  operation_id: string;
}

export interface Server {
  id: string;
  label: string;
  status: string;
  tenant_id: string;
  backup_frequency: string;
  local_backups: boolean;
  is_terminated: string;
  created_at: string;
  updated_at: string;
  platform: string;
  cloud: string;
  region: string;
  zone: string | null;
  instance_type: string;
  db_volume_size: number | null;
  data_volume_size: number | null;
  server_fqdn: string;
  public_ip: string;
  volume_size: string;
  master_user: string;
  master_password: string;
  snapshot_frequency: string | null;
  apps: {
    id: string;
    label: string;
    application: string;
    app_version: string;
    app_fqdn: string;
    app_user: string;
    app_password: string;
    sys_user: string;
    sys_password: string;
    cname: string;
    mysql_db_name: string;
    mysql_user: string;
    mysql_password: string;
    aliases: string[];
    symlink: string | null;
    server_id: string;
    project_id: string;
    created_at: string;
    webroot: string | null;
    is_csr_available: boolean;
    lets_encrypt: any;
    app_version_id: string;
    cms_app_id: string;
  }[];
}

export interface GetServersListResponse {
  status: boolean;
  servers: Server[];
}

export interface RestartServerParameters {
  server_id: number;
}

export interface RestartServerResponse {
  operation_id: number;
}

export interface ScaleStorageParameters {
  server_id: number;
  server_storage: number;
}

export interface ScaleStorageResponse {
  operation_id: number;
}

export interface ScaleVolumeSizeParameters {
  server_id: number;
  volume_size: number;
  volume_type: string;
}

export interface ScaleVolumeSizeResponse {
  operation_id: number;
}

export interface SetAutoscalePolicyParameters {
  server_id: number;
  cpu: boolean;
  cpu_max: number;
  memory: boolean;
  memory_max: number;
  is_cpu_downscale: boolean;
  is_mem_downscale: boolean;
}

export interface StartServerParameters {
  server_id: number;
}

export interface StartServerResponse {
  operation_id: number;
}

export interface StopServerParameters {
  server_id: number;
}

export interface StopServerResponse {
  operation_id: number;
}

export interface UpdateServerLabelParameters {
  serverId: number;
  label: string;
}

export interface UpdateServerLabelResponse {
  status: boolean;
}

export interface UpgradeServerParameters {
  server_id: number;
  instance_type: string;
}

export interface UpgradeServerResponse {
  operation_id: number;
}

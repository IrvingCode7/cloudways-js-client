/**
 * Represents a server entry.
 */
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
  db_volume_size: string | null;
  data_volume_size: string | null;
  server_fqdn: string;
  public_ip: string;
  volume_size: string;
  master_user: string;
  master_password: string;
  snapshot_frequency: string | null;
  apps: App[];
}

/**
 * Represents an application entry.
 */
export interface App {
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
  lets_encrypt: string | null;
  app_version_id: string;
  cms_app_id: string;
}
export interface DiskUsageResponse {
  status: boolean;
  operation_id: string;
}

export interface BackupServerParameters {
  server_id: number;
}

export interface BackupServerResponse {
  operation_id: number;
}

export interface DeleteLocalServerBackupsParameters {
  server_id: number;
}

export interface DeleteLocalServerBackupsResponse {}

export interface GetMonitoringGraphParameters {
  server_id: number;
  target: string;
  duration: string;
  timezone: string;
  output_format: string;
}

export interface GetMonitoringGraphResponse {
  contents: string;
}

export interface GetServerSettingsParameters {
  server_id: number;
}

export interface GetServerSettingsResponse {
  settings: {
    character_set_server: string;
    date_timezone: string;
    direct_access: string;
    display_errors: string;
    error_reporting: string;
    execution_limit: string;
    innodb_buffer_pool_size: string;
    innodb_lock_wait_timeout: string;
    max_connections: string;
    max_input_time: string;
    max_input_vars: string;
    memory_limit: string;
    mod_xdebug: string;
    package_versions: {
      fpm: string;
      mariadb: string;
      mysql: string;
      php: string;
      redis: string;
    };
    short_open_tag: string;
    ssl_protocols: string;
    static_cache_expiry: string;
    upload_size: string;
    varnish_default_ttl: string;
    wait_timeout: string;
  };
}

export interface GetServerMaintenanceWindowSettingsParameters {
  server_id: number;
}

export interface GetServerMaintenanceWindowSettingsResponse {
  maintenance_settings: {
    day: string;
    hour: number;
  };
}

export interface UpdateServerMaintenanceWindowSettingsParameters {
  server_id: number;
  day: string;
  hour: number;
}

export interface UpdateServerMaintenanceWindowSettingsResponse {
  message: string;
}

export interface UpdateBackupSettingsParameters {
  server_id: number;
  local_backups: boolean;
  backup_frequency: string;
  backup_retention: string;
  backup_time: string;
}

export interface UpdateBackupSettingsResponse {}

export interface UpdateMasterPasswordParameters {
  server_id: number;
  password: string;
}

export interface UpdateMasterPasswordResponse {}

export interface UpdateMasterUsernameParameters {
  server_id: number;
  username: string;
}

export interface UpdateMasterUsernameResponse {}

export interface UpdateServerPackageParameters {
  server_id: number;
  package_name: string;
  package_version: string | number;
}

export interface UpdateServerPackageResponse {
  operation_id: number;
}

export interface UpdateServerSettingsParameters {
  server_id: number;
  execution_limit: number;
  memory_limit: number;
  date_timezone: string;
  display_errors: string;
  upload_size: number;
  error_reporting: string;
  mysql_timezone: string;
  static_cache_expiry: number;
  character_set_server: string;
  max_connections: number;
  max_input_vars: number;
  max_input_time: number;
  tls_version: string;
  mod_zendguard: string;
  innodb_buffer_pool_size: number;
  innodb_lock_wait_timeout: number;
  wait_timeout: number;
  opcache_memory_size: number;
  mod_xdebug: string;
  nginx_http2: string;
  new_default_app: string;
  sys_locale: string;
  varnish_default_ttl: string;
}

export interface UpdateServerSettingsResponse {}

export interface UpdateSnapshotFrequencyParameters {
  server_id: number;
}

export interface UpdateSnapshotFrequencyResponse {}

export interface GetDiskCleanupSettingsParameters {
  server_id: number;
}

export interface GetDiskCleanupSettingsResponse {
  settings: {
    automate_cleanup: string;
    remove_app_local_backup: string;
    remove_app_private_html: string;
    remove_app_tmp: string;
    rotate_app_log: string;
    rotate_system_log: string;
  };
}

export interface UpdateDiskCleanupSettingsParameters {
  server_id: number;
  automate_cleanup?: string;
  remove_app_tmp?: string;
  remove_app_private_html?: string;
  rotate_system_log?: string;
  rotate_app_log?: string;
  remove_app_local_backup?: string;
}

export interface UpdateDiskCleanupSettingsResponse {}

export interface OptimizeServerDiskParameters {
  server_id: number;
  remove_app_tmp?: string;
  remove_app_private_html?: string;
  rotate_system_log?: string;
  rotate_app_log?: string;
  remove_app_local_backup?: string;
}

export interface OptimizeServerDiskResponse {
  status: boolean;
  operation_id: number;
}

/**
 * interface to get server settings response
 
 */

export interface getServerSettingsResponse {
  settings: {
    character_set_server: string;
    timezone: string;
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

/**
 * interface to get disk cleanup settings response
 */
export interface getDiskCleanupResponse{
    settings: {
        automate_cleanup: string,
        remove_app_local_backup: string,
        remove_app_private_html: string,
        remove_app_tmp: string,
        rotate_app_log: string,
        rotate_system_log: string
      }
}

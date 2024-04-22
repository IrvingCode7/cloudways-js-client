
/**
 * Interface to get service status
 */
export interface getServiceStatusResponse{
    services : {
      status : {
        apache2 : string,
        elasticsearch : string,
        elasticsearch_enabled : number,
        memcached : string,
        mysql : string,
        "newrelic-sysmond" : string,
        nginx : string,
        "redis-server" : string,
        redis_enabled : number,
        varnish : string,
        varnish_enabled : number
      }
    }
  }

  
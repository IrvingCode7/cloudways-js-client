import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type { getSafeUpdatesListResponse,
    SafeUpdatesSettings,
    SafeUpdatesShedule,
    SafeUpdatesHistory } from "./types"
    import { getAndWaitForOperationStatusCompleted } from "../operation";
    import type { OperationStatus } from "../operation/types";



/**
 * Retrieves safe updates details for a specific server and application.
 * @param {number} server_id - The numeric ID of the server.
 * @param {number} app_id - The numeric ID of the application.
 * @returns {Promise<OperationStatus>} A promise that resolves with the status and operation ID of the safe updates.
 * @example
 * {
      "status": true,
      "operation_id":12345
} 
 */
export async function getSafeUpdatesDetail(
    server_id : number,
    app_id : number
):Promise<OperationStatus>{
    const req = await apiCall(`/app/safeupdates?server_id=${server_id}&app_id=${app_id}`, HttpMethod.GET);
    return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


/**
 * Updates safe updates for a specific server and application.
 * @param {number} server_id - The numeric ID of the server.
 * @param {number} app_id - The numeric ID of the application.
 * @param {string} core - The version of the core to update.
 * @param {any[]} plugin - An array of plugins to update.
 * @param {any[]} theme - An array of themes to update.
 * @returns {Promise<OperationStatus>} A promise that resolves with the status and operation ID of the safe updates.
 * @example
 * {
    "status": true,
    "operation_id":12345
  }
 */
export async function UpdateSafeupdates(
    server_id : number,
    app_id : number,
    core : string,
    plugin : any[],
    theme : any[]
):Promise<OperationStatus>{
    const data = {
        server_id : server_id,
        app_id : app_id,
        core : core,
        plugin : plugin,
        theme : theme
    }
    const req = await apiCall(`/app/safeupdates/${app_id}`, HttpMethod.PUT, data);
    return await getAndWaitForOperationStatusCompleted(req.operation_id);
}


/**
 * Retrieves the status of safe updates for a specific server and application.
 * @param {number} server_id - The ID of the server.
 * @param {number} app_id - The ID of the application.
 * @returns {Promise<{ status: boolean, data: { is_active: boolean } }>} A Promise that resolves with the status of safe updates and whether they are active or not.
 * @example
 * {
  "status": true,
  "data": {
      "is_active": true
  }
}
 */
export function getSafeUpdatesStatus(
    server_id : number,
    app_id : number
):Promise<{ status : boolean, data : { is_active : boolean}}>{
    return apiCall(`/app/safeupdates/${app_id}/status?app_id=${app_id}&server_id=${server_id}`, HttpMethod.GET).then(
        (response) => ({
            status : response.status,
            data : {
                is_active : response.data.is_active
            }
        })
    )
}


/**
 * Updates the status of safe updates for a specific application.
 * @param {string} appType - The type of the application.
 * @param {number} app_id - The ID of the application.
 * @param {string} app_name - The name of the application.
 * @param {string} enable - Enable or disable safe updates.
 * @param {string} feedback - Feedback regarding safe updates.
 * @param {any[]} options - Additional options for safe updates.
 * @param {boolean} checked - Whether the update status is checked or not.
 * @param {string} desc - Description of the update status.
 * @param {string} label - Label for the update status.
 * @param {number} server_id - The ID of the server.
 * @returns {Promise<{ status: boolean, data: { enabled: string } }>} A Promise that resolves with the status of the safe updates and whether they are enabled or not.
 * @example
 * {
  "status": true,
  "data": {
      "enabled": "0"
  }
}
 */
export function UpdateSafeupdatesStatus(
    appType : string,
    app_id : number,
    app_name : string,
    enable : string,
    feedback : string,
    options : any[],
    checked : boolean,
    desc : string,
    label : string,
    server_id : number
):Promise<{ status: boolean, data: { enabled: string } }>{
    const data = {
        appType : appType,
        app_id : app_id,
        app_name : app_name,
        enable : enable,
        feedback : feedback,
        options : options,
        checked : checked,
        desc : desc,
        label : label,
        server_id : server_id
    }
    return apiCall("/app/safeupdates/status", HttpMethod.POST, data).then(
        (response) => ({
            status : response.status,
            data : {
                enabled : response.data.enabled
            }
        })
    )
}

/**
 * Retrieves the list of safe updates.
 * @returns {Promise<getSafeUpdatesListResponse>} A Promise that resolves with the list of safe updates.
 * @example
 * "status": true,
  "updates_list": [
    {
      "app_id": "999415377",
      "is_enable": "1",
      "update_slot": "4",
      "update_day": "4",
      "core": "no",
      "plugins": {
        "require": 0
      },
      "theme": {
        "require": 0
      }
    },
 */
export function getSafeUpdatesList():Promise<getSafeUpdatesListResponse>{
    return apiCall("/app/safeupdates/list", HttpMethod.GET).then(
        (response) => response as getSafeUpdatesListResponse
    )
}


/**
 * Retrieves the SafeUpdates settings for a specified application.
 * @param {number} server_id - The numeric ID of the server.
 * @param {number} app_id - The numeric ID of the application.
 * @returns {Promise<SafeUpdatesSettings>} A Promise that resolves with the SafeUpdates settings.
 * @example
 * {
  "settings": {
      "id": "4760",
      "app_id": "999418464",
      "is_update_enable": "1",
      "update_list": {
          "plugin": [
              "redis-cache-pro"
          ],
          "theme": [
              "twentytwentytwo"
          ],
          "core": "no"
      },
      "available_update_list": {
          "plugin": [],
          "theme": [],
          "core": "no",
          "themes_with_versions": [],
          "plugins_with_versions": []
      },
      "update_slot": "12:01 - 18:00",
      "update_day": "Sunday",
      "updated_at": "2023-04-29 12:00:22",
      "notification_email": "fpr@cloudways.com",
      "pre_notification": "1",
      "successful_updates": "1",
      "failed_updates": "1"
  },
  "status": true
}
 */
export function getSafeUpdatesSettings(
    server_id: number, 
    app_id: number
): Promise<SafeUpdatesSettings> {
    return apiCall(`/app/safeupdates/${app_id}/settings?app_id=${app_id}&server_id=${server_id}`, HttpMethod.GET).then(
        (response) => response as SafeUpdatesSettings
    );
}

/**
 * Updates the SafeUpdates settings for a specified application.
 * @param {number} app_id - The numeric ID of the application.
 * @param {string} core - The core update status ('yes' or 'no').
 * @param {string} emails - Notification email addresses.
 * @param {number} failed_updates - Number of failed updates to allow.
 * @param {any[]} plugin - List of plugin names.
 * @param {number} pre_notification - Pre-notification status (1 for enabled, 0 for disabled).
 * @param {number} server_id - The numeric ID of the server.
 * @param {number} status - Update status (1 for enabled, 0 for disabled).
 * @param {number} successful_updates - Number of successful updates to allow.
 * @param {any[]} theme - List of theme names.
 * @param {number} update_day - Update day (0 for Sunday, 1 for Monday, and so on).
 * @param {number} update_slot - Update time slot (in hours).
 * @returns {Promise<{ status: boolean }>} A Promise that resolves with the update status.
 * @example
 * {
    "status": true
}
 */
export function postSafeUpdatesSettings(
    app_id : number,
    core : string,
    emails : string,
    failed_updates : number,
    plugin : any[],
    pre_notification : number,
    server_id : number,
    status : number,
    successful_updates : number,
    theme : any[],
    update_day : number,
    update_slot : number,
):Promise<{ status : boolean}>{
    const data = {
        app_id : app_id,
        core : core,
        emails : emails,
        failed_updates : failed_updates,
        plugin : plugin,
        pre_notification : pre_notification,
        server_id : server_id,
        status : status,
        successful_updates : successful_updates,
        theme : theme,
        update_day : update_day,
        update_slot : update_slot,
    };
    return apiCall("/safeupdates/settings", HttpMethod.POST, data).then(
        (response) => ({
            status : response.status
        })
    )
}


/**
 * Retrieves the SafeUpdates schedule settings for a specific application.
 * 
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<SafeUpdatesShedule>} The SafeUpdates schedule settings.
 * @example
 * {
  "status": true,
  "updates_list": {
      "core": "no",
      "themes": {
          "selected": 4,
          "updated": 4
                },
      "plugins": {
           "selected": 2,
           "updated": 2
                }
  }
}
 */
export function getSafeUpdatesSchedule(
    server_id: number, 
    app_id: number
): Promise<SafeUpdatesShedule> {
    return apiCall(`/app/safeupdates/${app_id}/schedule?app_id=${app_id}&server_id=${server_id}`, HttpMethod.GET).then(
        (response) => response as SafeUpdatesShedule
    );
}


/**
 * Retrieves the SafeUpdates history for a specific application.
 * 
 * @param {number} server_id - Numeric ID of the server.
 * @param {number} app_id - Numeric ID of the application.
 * @returns {Promise<SafeUpdatesHistory>} The SafeUpdates history.
 * @example
 * {
  "status": true,
  "history": [
      {
          "id": "412048",
          "app_id": "999418895",
          "message": "On Demand Update Successful: ",
          "updates": {
              "core": "no",
              "themes": {
                  "selected": 2,
                  "updated": 2
              },
              "plugins": {
                  "selected": 1,
                  "updated": 1
              }
          },
          "status": "1",
          "type": "0",
          "created_at": "2023-05-02 12:29:08",
          "update_date": "2023-05-02 12:29:08",
          "reason": "Operation completed",
          "case": 1
      }]
 */
export function getSafeUpdatesHistory(
    server_id: number, 
    app_id: number
): Promise<SafeUpdatesHistory> {
    return apiCall(`/app/safeupdates/${app_id}/history?server_id=${server_id}&app_id=${app_id}`, HttpMethod.GET).then(
        (response) => response as SafeUpdatesHistory
    );
}


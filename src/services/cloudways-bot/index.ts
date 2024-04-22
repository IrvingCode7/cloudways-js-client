import { apiCall } from "../core";
import { HttpMethod } from "../core/types";
import type {
  CreateAlertChannelResponse,
  GetAllAlertsResponse,
  GetAllAlertChannelsResponse,
  UserAlertChannel,
  UpdateIntegrationResponse,
} from "./types";

/**
 * Creates an alert channel.
 * 
 * @param {string} name - The name of the alert.
 * @param {string} channel - The integration channel id (e.g., 3 for Slack).
 * @param {number[]} events - An array of event ids that trigger the alert.
 * @param {boolean} is_active - Indicates whether the alert channel is active (true) or inactive (false).
 * @param {string} [to] - The email address (required if mail is chosen as the alert channel).
 * @param {string} [url] - The URL required to hook integrations other than email.
 * @returns {Promise<CreateAlertChannelResponse>} A promise that resolves to an object containing the details of the created alert channel.
 * @example 
 * {
  "integration" : {
    "id" : 8888,
    "name" : "2",
    "user_id" : 88,
    "events" : [ 1, 2 ],
    "config" : {
      "to" : "asd@asd.com"
    },
    "created_at" : "2016-10-13 10:02:13",
    "updated_at" : null,
    "channel" : 2,
    "is_active" : 1
  }
}
 */
export function createAlertChannel(
  name: string,
  channel: string,
  events: number[],
  is_active: boolean,
  to?: string,
  url?: string
): Promise<CreateAlertChannelResponse> {
  const data = {
    name: name,
    channel: channel,
    events: events,
    is_active: is_active,
    to: to,
    url: url,
  };
  return apiCall("/integrations", HttpMethod.POST, data).then(
    (response) => response as CreateAlertChannelResponse
  );
}

/**
 *Deletes a Cloudways Bot channel.
 *@param {number} channel_id - The id of the channel to be deleted.
 *@returns {Promise<void>}
 */
export function deleteCloudwaysBotChannel(channel_id: number): Promise<void> {
  const data = {
    channel_id: channel_id,
  };
  return apiCall(`/integrations/${channel_id}`, HttpMethod.DELETE, data);
}

/**
 * Retrieves the list of all alerts.
 * @returns {Promise<GetAllAlertsResponse>} A promise that resolves with the response containing the list of all alerts.
 * @example
 * {
  "alerts" : [ {
    "id" : 88888,
    "server_id" : 8888,
    "app_id" : null,
    "details" : {
      "subject" : "Disk Inode Alert",
      "desc" : "The available free disk inodes on your server are low.",
      "template_slug" : "inode-full-1",
      "values" : {
        "SERVER_LABEL" : "DEB8_PHP7"
      }
    }
  } ]
}
 */
export function getAllAlerts(): Promise<GetAllAlertsResponse> {
  return apiCall("/alerts/", HttpMethod.GET).then(
    (response) => response as GetAllAlertsResponse
  );
}

/**
 * Retrieves the paginated list of alerts.
 * 
 * @param {number} lastId - The ID of the last alert from the previous call to get the next set of alerts.
 * @returns {Promise<GetAllAlertsResponse>} A promise that resolves with the response containing the paginated list of alerts.
 * @example{
  "alerts" : [ {
    "id" : 88888,
    "server_id" : 8888,
    "app_id" : null,
    "details" : {
      "subject" : "Disk Inode Alert",
      "desc" : "The available free disk inodes on your server are low.",
      "template_slug" : "inode-full-1",
      "values" : {
        "SERVER_LABEL" : "DEB8_PHP7"
      }
    }
  } ]
}
 */
export function getPaginatedAlerts(
  lastId: number
): Promise<GetAllAlertsResponse> {
  return apiCall(`/alerts/${lastId}`, HttpMethod.GET).then(
    (response) => response as GetAllAlertsResponse
  );
}

/**
 * Retrieves the list of all alert channels.
 * 
 * @returns {Promise<GetAllAlertChannelsResponse>} A promise that resolves with the response containing the list of all alert channels.
 * @example
 * {
  "events" : [ {
    "id" : 1,
    "name" : "Web Stack Health",
    "type" : "CBWebstackHealth",
    "level" : 1
  }, {
    "id" : 2,
    "name" : "Host Health",
    "type" : "HostHealth",
    "level" : 1
  }],
  "channels" : {
    "1" : {
      "name" : "HipChat",
      "call_type" : "web_request",
      "config" : {
        "url" : "https://api.hipchat.com/v2/room/ROOM_ID/notification?auth_token=YOUR_AUTH_TOKEN",
        "content_type" : "application/x-www-form-urlencoded"
      }
    }
 */
export function getAllAlertChannels(): Promise<GetAllAlertChannelsResponse> {
  return apiCall("/integrations/create", HttpMethod.GET).then(
    (response) => response as GetAllAlertChannelsResponse
  );
}

/**
 * Retrieves the list of user-configured alert integrations.
 * @returns {Promise<UserAlertChannel>} A promise that resolves with an array of user alert channels.
 * @example
 * {
  "integrations" : [ {
    "id" : 44,
    "name" : "John Doe",
    "created_at" : "2016-07-26 14:49:32",
    "events" : [ 1, 2, 5, 6, 7, 8, 9, 10 ],
    "config" : {
      "to" : "john.doe@aol.com"
    },
    "is_active" : 1,
    "channel" : 2
  } ]
}
 */
export function getUserAlertChannels(): Promise<UserAlertChannel> {
  return apiCall("/integrations", HttpMethod.GET).then(
    (response) => response as UserAlertChannel
  );
}

/**
 * Marks all of the alerts as read.
 * @returns {Promise<void>} A promise that resolves when all alerts are marked as read.
 */
export function markAllAlertsAsRead(): Promise<void> {
  return apiCall("/alert/markAllRead", HttpMethod.POST);
}

/**
 * Marks the specified alert as read.
 * @param {number} alertId - The numeric ID of the alert to mark as read.
 * @returns {Promise<void>} A promise that resolves when the alert is successfully marked as read.
 */
export function markAlertAsRead(alertId: number): Promise<void> {
  const data = {
    alert_id: alertId,
  };
  return apiCall(`/alert/markAsRead/${alertId}`, HttpMethod.POST, data);
}

/**
 * Updates a CloudwaysBot integration.
 * @param {number} channelId - The numeric ID of the channel to update.
 * @param {string} name - The name of the alert.
 * @param {string} channel - The integration channel ID (e.g., 3 for Slack).
 * @param {number[]} events - An array of event IDs that trigger the alert.
 * @param {boolean} isActive - Specifies if the alert is active (true) or inactive (false).
 * @param {string} to - The email address required if mail is chosen as alert integration.
 * @param {string} url - The URL required to hook integrations other than email.
 * @returns {Promise<UpdateIntegrationResponse>} A promise that resolves with the updated integration data.
 * @example
 * {
  "integration" : {
    "id" : 8888,
    "name" : "2",
    "user_id" : 88,
    "events" : [ 1, 2 ],
    "config" : {
      "to" : "asd@asd.com"
    },
    "created_at" : "2016-10-13 10:02:13",
    "updated_at" : null,
    "channel" : 2,
    "is_active" : 1
  }
}
 */
export function updateCloudwaysBotIntegration(
  channelId: number,
  name: string,
  channel: string,
  events: number[],
  isActive: boolean,
  to: string,
  url: string
): Promise<UpdateIntegrationResponse> {
  const data = {
    channel_id: channelId,
    name: name,
    channel: channel,
    events: events,
    is_active: isActive,
    to: to,
    url: url,
  };
  return apiCall(`/integrations/${channelId}`, HttpMethod.PUT, data).then(
    (response) => response as UpdateIntegrationResponse
  );
}

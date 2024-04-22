

/**
 * Interface to get Safe Updates List Response
 */
export interface getSafeUpdatesListResponse{
        status: true,
        updates_list:
          {
            app_id: string,
            is_enable: string,
            update_slot: string,
            update_day: string,
            core: string,
            plugins: {
              require: number
            },
            theme: {
              require: number
            }
          }[]

}


/**
 * Represents the SafeUpdates settings for an application.
 */
export interface SafeUpdatesSettings {
    settings: {
        id: string;
        app_id: string;
        is_update_enable: string;
        update_list: {
            plugin: string[];
            theme: string[];
            core: string;
        };
        available_update_list: {
            plugin: string[];
            theme: string[];
            core: string;
            themes_with_versions: string[];
            plugins_with_versions: string[];
        };
        update_slot: string;
        update_day: string;
        updated_at: string;
        notification_email: string;
        pre_notification: string;
        successful_updates: string;
        failed_updates: string;
    };
    status: boolean;
}

/**
 * interface to get safeupdates schedule
 */

export interface SafeUpdatesShedule{
    status: boolean,
    updates_list: {
        core: string,
        themes: {
            selected: number,
            updated: number
                  },
        plugins: {
             selected: number,
             updated: number
                  }
    }
}

export interface SafeUpdatesHistory {
    status: boolean;
    history: SafeUpdate[];
}

export interface SafeUpdate {
    id: string;
    app_id: string;
    message: string;
    updates: {
        core: string;
        themes: {
            selected: number;
            updated: number;
        };
        plugins: {
            selected: number;
            updated: number;
        };
    };
    status: string;
    type: string;
    created_at: string;
    update_date: string;
    reason: string;
    case: number;
}
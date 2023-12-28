// services/core/index.ts
import axios from "axios";
var config = {
  email: "",
  api_key: ""
};
var authToken = null;
async function getNewToken() {
  if (!config.email || !config.api_key) {
    throw new Error(
      "Configuration is incomplete. Please initialize with email and api_key."
    );
  }
  try {
    const response = await axios.post(
      "https://api.cloudways.com/api/v1/oauth/access_token",
      config
    );
    authToken = {
      token: response.data.access_token,
      expiration: Date.now() + (response.data.expires_in - 300) * 1e3
    };
  } catch (error) {
    throw new Error("Error getting new token: " + error);
  }
}
async function apiCall(endpoint, method = "GET" /* GET */, data = null) {
  if (!authToken || Date.now() >= authToken.expiration) {
    await getNewToken();
  }
  if (!authToken) {
    throw new Error("No API token available.");
  }
  try {
    const response = await axios({
      url: `https://api.cloudways.com/api/v1${endpoint}`,
      method,
      headers: {
        Authorization: `Bearer ${authToken.token}`
      },
      data
    });
    return response.data;
  } catch (error) {
    throw new Error("API call failed: " + error);
  }
}

// services/projects/index.ts
async function createProject(params) {
  return apiCall("/project", "POST" /* POST */, params);
}
async function deleteProject(params) {
  return apiCall(`/project/${params.id}`, "DELETE" /* DELETE */);
}
async function getProjectList() {
  return apiCall("/project");
}
async function updateProject(params) {
  return apiCall(`/project/${params.id}`, "PUT" /* PUT */, params);
}
export {
  createProject,
  deleteProject,
  getProjectList,
  updateProject
};

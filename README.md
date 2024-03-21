<h1>Cloudways JS Client</h1>

<p>
  <a href="https://badge.fury.io/js/cloudways-js-client"><img src="https://badge.fury.io/js/cloudways-js-client.svg" alt="npm version"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <span><img src="https://img.shields.io/badge/TypeScript-Ready-blue" alt="TypeScript Ready"></span>
</p>

<h2>Description</h2>

<p>
  Cloudways JS Client is a <strong>TypeScript-based</strong> client library that allows you to power your applications with the Cloudways API.
  It provides a convenient and strongly-typed way to interact with the Cloudways API, enabling you to manage servers, perform automation,
  and integrate Cloudways functionality into your web applications.
</p>

<h2>🚧 Under Development 🚧</h2>

<p>
Please note that this library is still under development. Although it's functional and can be used, some features might be incomplete or subject to changes.
</p>

<h2>Features</h2>

<ul>
  <li>Easy-to-use client library for the Cloudways API.</li>
  <li>Simplifies server management and web app integration.</li>
  <li><strong>Built with TypeScript</strong> for improved type safety and development experience.</li>
  <li>Comprehensive documentation and code examples, including JSDoc comments.</li>
</ul>

<h2>Installation</h2>

<p>You can install the package via npm:</p>

<pre><code>npm install cloudways-js-client
</code></pre>

<h2>Usage</h2>

<p>The Cloudways JS Client library makes it easy to interact with the Cloudways API for various operations. Below are some examples to help you get started.</p>  <h3>Initializing the API</h3>
<p>Before performing any operations, initialize the API with your Cloudways account credentials:</p>
  
```javascript
import { initializeCloudwaysApi } from 'cloudways-js-client';

const email = 'your_email@example.com'; // Replace with your Cloudways account email
const apiKey = 'your_api_key'; // Replace with your Cloudways API key

initializeCloudwaysApi(email, apiKey);
```
 <h3>Deleting a Server</h3>
 <p>To delete a server, use the <code>deleteServer</code> function. Ensure you have the correct server ID:</p>

```javascript
import { deleteServer } from "cloudways-js-client";

async function deleteServerA() {
  const serverId = 12345; // Replace with the server ID you want to delete
  await deleteServer(serverId);
  console.log("Server deleted successfully.");
}
```

  <h3>Getting the List of Servers</h3>
   <p>You can retrieve the list of servers associated with your account using the <code>getServersList</code> function:</p>

```javascript
import { getServersList } from "cloudways-js-client";

async function listServers() {
  try {
    const servers = await getServersList();
    console.log("Servers List:", servers);
  } catch (error) {
    console.error("Error fetching servers list:", error);
  }
}

listServers();
```

<h3>Combining Operations</h3>
<p>You can combine these functions to perform multiple operations. For example, to delete a server and then get the updated list of servers:</p>

```javascript
async function deleteServerAndGetList() {
  const serverId = 12345; // Replace with the server ID to delete
  await deleteServer(serverId);
  console.log("Server deleted successfully.");
  console.log("Updated Servers List:", await getServersList());
}

deleteServerAndGetList();
```

<h2>Issues</h2>

<p>If you find any issues or have any feature requests, please open an <a href="https://github.com/code-gio/cloudways-js-client/issues">issue</a> on GitHub.</p>

<h2>License</h2>

<p>This project is open source and available under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>

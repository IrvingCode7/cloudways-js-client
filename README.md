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

<p>
  To get you started, here's an example that demonstrates how to get the status of a background operation using the "Get Operation Status" function:
</p>

<pre><code>import { getOperationStatus, GetOperationStatusRequest } from 'cloudways-js-client';

const payload: GetOperationStatusRequest = {
  id: 123456 // Replace with the operation ID you have
};

async function fetchOperationStatus() {
  try {
    const response = await getOperationStatus(payload);
    console.log("Operation Status:", response.operation);
  } catch (error) {
    console.error("Error fetching operation status:", error);
  }
}

fetchOperationStatus();
</code></pre>

<p>For detailed usage examples and API documentation, please refer to the <a href="https://developers.cloudways.com/docs/">documentation</a>.</p>

<h2>Contributing</h2>

<p>Contributions are welcome! Please follow the <a href="https://github.com/code-gio/cloudways-js-client/blob/main/CONTRIBUTING.md">contribution guidelines</a> when making contributions to this project.</p>

<h2>Issues</h2>

<p>If you find any issues or have any feature requests, please open an <a href="https://github.com/code-gio/cloudways-js-client/issues">issue</a> on GitHub.</p>

<h2>License</h2>

<p>This project is open source and available under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>

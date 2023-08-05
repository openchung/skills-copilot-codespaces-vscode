// Create web server
// 1. Create a server object
// 2. Create a port object
// 3. Start listening to the port
// 4. Handle request
// 5. Parse request body
// 6. Create a comment object
// 7. Save to database
// 8. Redirect to home page

const http = require('http');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const mime = require('mime-types');
const mysql = require('mysql');
const { parse } = require('path');

const hostname = '
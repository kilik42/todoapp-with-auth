//creating a file to help us to connect to the database
const Pool = require('pg').Pool
require('dotenv').config();

const pool = new Pool({

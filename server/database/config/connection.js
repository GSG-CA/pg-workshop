// Add code below to connect to your database
require('env2')('./config.env');
const {Pool} = require('pg');

const {NODE_ENV, DB_URL, DEV_DB_URL, TEST_DB_URL} = process.env;
let dbUrl = "";

switch(NODE_ENV) {
    case 'production':
        dbUrl = DB_URL;
    break;
    case 'development':
        dbUrl = DEV_DB_URL;
    break;
    case 'test':
        dbUrl = TEST_DB_URL;
    break;
    default:
        throw new Error('No Database is found !');
}

const options = {
    connectionString: dbUrl,
    ssl: true
};

module.exports = new Pool(options);
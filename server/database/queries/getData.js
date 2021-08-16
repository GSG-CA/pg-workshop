// Add code below to get users info from your database
const connection = require('../config/connection');

const getDataQuery = () => {
    return connection.query(`SELECT * FROM users`);
};

module.exports = getDataQuery;
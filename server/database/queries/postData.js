// Add code below to insert user info to your database
const connection = require('../config/connection');

const postDataQuery = (name, location) => {
    return connection.query(`INSERT INTO users (name, location) VALUES ($1, $2) RETURNING *;`, [name, location])
};

module.exports = postDataQuery
const connection = require('../database/config/connection.js');

const getDynamicData = (req, res) => {
    // console.log(connection.query('SELECT * FROM users;').then(console.log));
    return connection
    .query('SELECT * FROM users;')
    .then((result) => console.log({result}))
    .catch((err) => console.log({err}))
}


module.exports = getDynamicData;
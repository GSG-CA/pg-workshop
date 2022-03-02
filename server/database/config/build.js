const {join} = require('path');
const {readFileSync} = require('fs');

const connection = require('../config/connection');  

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  const sqlData = readFileSync(join(__dirname, "data.sql")).toString();

  return connection.query(sql + sqlData);
};

module.exports = {dbBuild};


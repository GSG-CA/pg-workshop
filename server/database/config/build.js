const {join} = require('path');
const {readFileSync} = require('fs');

const connection = require('./connection');
const sql = readFileSync(join(__dirname,'build.sql')).toString();


    connection
    .query(sql)
    .then(() => console.log('db build succesfully'))
    .catch(() => console.log('sth wrong!'))
    

 
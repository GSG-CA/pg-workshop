const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

const getData = require('../database/queries/getData');
const addUser = require('../database/queries/postData');


beforeEach(() => dbBuild());

afterAll(() => connection.end());


test('TEST INSERTION', () => {
  return addUser('nabil', 'nabil@gmail.com')
    .then((data) => {
      expect(data.rows[0].name).toBe('nabil');
    })
});

test('TEST get users', () => {
  return getData()
    .then((data) => {
       expect(data.rows.length).toBe(2);
    })
});

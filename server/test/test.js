const connection = require('../database/config/connection');
const {dbBuild} = require('../database/config/build');
const getUsers = require('../database/queries/getData');
const addUsers = require('../database/queries/postData');

test("jest is working", () => {
  expect(1).toBe(1);
});

beforeEach(() => {
  return dbBuild();
});

afterAll(() => {
  return connection.end();
});





test("Insert user", () => {
  const name = 'test user';
  const location = 'test location';
  return addUsers(name, location)
    .then(data => {
      expect(data.rows[0].name).toBe(name);
      expect(data.rows[0].location).toBe(location);
    })
});

test("Get user function" ,() => {
  const expected =  { id: 1, name: 'farah', location: 'Gaza' };  
 return getUsers()
    .then(data => {
       expect(data.rows[0].name).toBe('farah');
    });
});
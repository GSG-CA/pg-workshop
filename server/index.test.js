const connection = require('./database/config/connection');
const {dbBuild} = require('./database/config/build');
const {getDataQuery, postDataQuery} = require('./database/queries/');

beforeEach(() => {
    return dbBuild();
})

test('Test get Data', () => {
    return getDataQuery().then(({rowCount}) => expect(rowCount).toBe(7))
});

test('Test post Data', () => {
    return postDataQuery('Elham', 'Gaza').then((res) => {
        console.log(res)
        expect(res.rowCount).toBe(1)})
});

afterAll(() => {
    return connection.end()
})
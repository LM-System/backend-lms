const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {sequelize}= require('../src/model/index')
const base64 = require('base-64')

beforeAll(async () => {
    await sequelize.sync();
});
describe('signin testing',()=>{
    test('POST to /signup to create a new institution',async ()=>{
        const response = await request.post('/signup').send({
            "id":1,
            "username":"LTUC",
            "password":"1234",
            "email":"ltuc@gmail.com",
            "phone_number":"00962799321174",
            "role":"institution",
            "bio":"luminous technology university college",
            "address":"Airport st.- Amman- Jordan"
        })
        expect(response.status).toBe(201)
    })
    test('POST to /signup to create a new instructor',async ()=>{
        const response = await request.post('/signup').send({
            "id":2,
            "username":"Shihab",
            "password":"1234",
            "email":"shihab@gmail.com",
            "gender":"male",
            "birth_date":"1992-10-10",
            "phone_number":"00962799321174",
            "role":"instructor"
        })
        expect(response.status).toBe(201)
    })
    test('POST to /signin to join the user with correct info',async ()=>{
        const response = await request.post('/signin').set({
            authorization:`Basic ${base64.encode('ltuc@gmail.com:1234')}`
        })
        expect(response.status).toBe(200)
    })
    test('POST to /signin to join the user with wrong info',async ()=>{
        const response = await request.post('/signin').set({
            authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
        })
        expect(response.status).toBe(500)
    })


})
afterAll(async () => {
    await sequelize.drop();
});
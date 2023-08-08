const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {sequelize}= require('../src/model/index')
const base64 = require('base-64')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Secret = process.env.SECRET
const {usersModel,departmentsModel,institutionModel,announcementModel}= require('../src/model/relations')

beforeAll(async () => {
    await sequelize.sync();
    usersModel.create({
        "id":1,
        "username":"LTUC",
        "password":"1234",
        "email":"ltuc@gmail.com",
        "phone_number":"00962799321174",
        "role":"institutionHead",
        "bio":"luminous technology university college",
        "address":"Airport st.- Amman- Jordan"
    })
    institutionModel.create({
        "id":1,
        "name":"LTUC" ,
        "address": "Airport st.- Amman- Jordan",
        "phone_number":"00962799321174" ,
        "logo": "STRING",
        "institution_credentials": "STRING",
        "email": "ltuc@gmail.com",
        "user_id":1 
    })
    usersModel.create({
        "id":2,
        "username":"shihab",
        "password":"1234",
        "email":"shihab@gmail.com",
        "phone_number":"00962799321174",
        "role":"departmentHead",
        "bio":"luminous technology university college",
        "address":"Airport st.- Amman- Jordan"
    })
    departmentsModel.create({
        "id":1,
        "name":"tecnology",
        "institution_id":1, 
        "user_id":2 
    })
});
describe('announcement testing',()=>{
        // add announcement
        test('POST to /announcement to create new announcement',async ()=>{
            const response = await request.post('/announcement').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            }).send({
                "id":1,
                "title":"Welcoming" ,
                "body": "Hello and welcome to our university",
                "institution_id":1  
            })
            
            expect(response.status).toBe(201)
        })

        // update announcement
        test('PUT to /announcement/:id to update announcement',async ()=>{
            const response = await request.put('/announcement/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            }).send({
                "id":1,
                "title":"Welcoming announcement" ,
                "body": "Hello and welcome to our university",
                "institution_id":1    
            })
            
            expect(response.status).toBe(200)
        })

        //announcement of one institution
        test('GET to /institutionannouncements to show announcements of one institution',async ()=>{
            announcementModel.create({
                "id":2,
                "title":"date of starting the semester" ,
                "body": "I would like to inform you that, the first semester will start at 18/10/2023",
                "institution_id":1
            })
            announcementModel.create({
                "id":3,
                "title":"new update" ,
                "body": "The date of starting has been delayed to 22/10/2023",
                "institution_id":1
            })
            const response = await request.get('/institutionannouncements/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            })
            
            expect(response.status).toBe(200)
        })

        

        // delete announcement
        test('DELETE to /announcement/:id to delete the announcement',async ()=>{
            
            const response = await request.delete('/announcement/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            })
            
            expect(response.status).toBe(204)
        })
        
})
afterAll(async () => {
    await sequelize.drop();
});
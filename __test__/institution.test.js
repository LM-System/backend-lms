const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {sequelize}= require('../src/model/index')
const base64 = require('base-64')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Secret = process.env.SECRET
const {usersModel,departmentsModel}= require('../src/model/relations')

beforeAll(async () => {
    await sequelize.sync();
    usersModel.create({
        "id":1,
        "username":"codinghunters",
        "password":"1234",
        "email":"codingHunters@gmail.com",
        "phone_number":"00962799321174",
        "role":"admin",
        "bio":"luminous technology university college",
        "address":"Airport st.- Amman- Jordan"
    })
    usersModel.create({
        "id":2,
        "username":"LTUC",
        "password":"1234",
        "email":"ltuc@gmail.com",
        "phone_number":"00962799321174",
        "role":"institution",
        "bio":"luminous technology university college",
        "address":"Airport st.- Amman- Jordan"
    })
});
describe('institution testing',()=>{
        // add institution
        test('POST to /institution to create new institution',async ()=>{
           
                const response = await request.post('/institution').set({
                    authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
                }).send({
                    "id":1,
                    "name":"LTUC" ,
                    "address": "Airport st.- Amman- Jordan",
                    "phone_number":"00962799321174" ,
                    "logo": "STRING",
                    "institution_credentials": "STRING",
                    "email": "ltuc@gmail.com",
                    "user_id":2    
                })
                
                expect(response.status).toBe(201)
            
        })

        // update institution
        test('PUT to /institution/:id to update institution',async ()=>{
            const response = await request.put('/institution/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com',role:'institution'},Secret)}`
            }).send({
                "id":1,
                "name":"LTUC" ,
                "address": "Airport st.- Amman- Jordan",
                "phone_number":"00962799321175" ,
                "logo": "STRING",
                "institution_credentials": "STRING",
                "email": "ltuc@gmail.com",
                "user_id":2    
            })
            
            expect(response.status).toBe(200)
        })

        // institution students
        test('GET to /institutionstudents to show the students of the institution',async ()=>{
            usersModel.create({
                "id":3,
                "username":"ahmad",
                "password":"1234",
                "email":"ahmad@gmail.com",
                "phone_number":"00962799321174",
                "role":"student",
                "institution_id":1
            })
            usersModel.create({
                "id":4,
                "username":"samer",
                "password":"1234",
                "email":"samer@gmail.com",
                "phone_number":"00962799321174",
                "role":"student",
                "institution_id":1
            })
            const response = await request.get('/institutionstudents/1').set({
                authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })

        // institution employees
        test('GET to /institutionemployees to show the institution employees',async ()=>{
            usersModel.create({
                "id":5,
                "username":"shihab",
                "password":"1234",
                "email":"shihab@gmail.com",
                "phone_number":"00962799321174",
                "role":"departmentHead",
                "institution_id":1
            })
            usersModel.create({
                "id":6,
                "username":"helmi",
                "password":"1234",
                "email":"helmi@gmail.com",
                "phone_number":"00962799321174",
                "role":"instructor",
                "institution_id":1
            })
            const response = await request.get('/institutionemployees/1').set({
                authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })

        // institution departments
        test('GET to /institutiondepartments to show the institution departments',async ()=>{
            departmentsModel.create({
                "id":1,
                "name":"technology" ,
                "institution_id":1,
                "user_id":5 
            })
            departmentsModel.create({
                "id":2,
                "name":"pharmacy" ,
                "institution_id":1,
                "user_id":6
            })
            
            const response = await request.get('/institutiondepartments/1').set({
                authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })

        // show all institutions
        test('GET to /institutions to show all institutions ',async ()=>{
            
            
            const response = await request.get('/institutions').set({
                authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(1)
        })

        // show institution according to its name
        test('GET to /institution/:name to show institution accourding to its name',async ()=>{
            
            
            const response = await request.get('/institution/LTUC').set({
                authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
            })
            
            expect(response.status).toBe(200)
        })

        // delete institution
        test('DELETE to /institution/:id to delete the institution',async ()=>{
            
            const response = await request.delete('/institution/1').set({
                authorization:`Bearer ${jwt.sign({email:'codingHunters@gmail.com',role:'admin'},Secret)}`
            })
            
            expect(response.status).toBe(204)
        })
        
})
afterAll(async () => {
    await sequelize.drop();
});
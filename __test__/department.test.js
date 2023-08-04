const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {sequelize}= require('../src/model/index')
const base64 = require('base-64')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Secret = process.env.SECRET
const {usersModel,institutionModel,coursesModel}= require('../src/model/relations')

beforeAll(async () => {
    await sequelize.sync();
    usersModel.create({
        "id":1,
        "username":"LTUC",
        "password":"1234",
        "email":"ltuc@gmail.com",
        "phone_number":"00962799321174",
        "role":"institution",
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
});

describe('department testing',()=>{

        // add department
        test('POST to /department to create new department',async ()=>{
            const response = await request.post('/department').set({
                authorization:`Bearer ${jwt.sign('username:LTUC',Secret)}`
            }).send({
                "id":1,
                "name":"tecnology",
                "institution_id":1, 
                "user_id":2    
            })
            
            expect(response.status).toBe(201)
        })

        // update department
        test('PUT to /department/:id to update department',async ()=>{
            const response = await request.put('/department/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            }).send({
                "id":1,
                "name":"technology",
                "institution_id":1, 
                "user_id":2   
            })
            
            expect(response.status).toBe(200)
        })

        // department students
        test('GET to /departmentstudents to show the students of the department',async ()=>{
            usersModel.create({
                "id":3,
                "username":"malek",
                "password":"1234",
                "email":"malek@gmail.com",
                "phone_number":"00962799321174",
                "role":"student",
                "department_id":1
            })
            usersModel.create({
                "id":4,
                "username":"samer",
                "password":"1234",
                "email":"samer@gmail.com",
                "phone_number":"00962799321174",
                "role":"student",
                "department_id":1
            })
            const response = await request.get('/departmentstudents/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })

        // department instructors
        test('GET to /departmentinstructors/:id to show the department instructors',async ()=>{
            usersModel.create({
                "id":5,
                "username":"salem",
                "password":"1234",
                "email":"salem@gmail.com",
                "phone_number":"00962799321174",
                "role":"instructor",
                "department_id":1
            })
            usersModel.create({
                "id":6,
                "username":"helmi",
                "password":"1234",
                "email":"helmi@gmail.com",
                "phone_number":"00962799321174",
                "role":"instructor",
                "department_id":1
            })
            const response = await request.get('/departmentinstructors/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })

        // department courses
        test('GET to /departmentcourses to show the department courses',async ()=>{
            coursesModel.create({
                "id":1,
                "name":"JS" ,
                "description": "this is javaScript course",
                "syllabus":"STRING" ,
                "start_date": "2012-2-2",
                "end_date": "2013-1-4",
                "department_id":1 
            })
            coursesModel.create({
                "id":2,
                "name":"python" ,
                "description": "this is python course",
                "syllabus":"STRING" ,
                "start_date": "2013-1-1",
                "end_date": "2013-7-8",
                "department_id":1 
            })
            
            const response = await request.get('/departmentcourses/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })

        // show one departments
        test('GET to /department/:id to show one departments ',async ()=>{
            
            
            const response = await request.get('/department/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            })
            
            expect(response.status).toBe(200)
        })

        
})
afterAll(async () => {
    await sequelize.drop();
});
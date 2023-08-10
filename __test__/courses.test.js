const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {sequelize}= require('../src/model/index')
const base64 = require('base-64')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Secret = process.env.SECRET
const {usersModel,departmentsModel,institutionModel,sectionsModel}= require('../src/model/relations')

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
    usersModel.create({
        "id":3,
        "username":"malek",
        "password":"1234",
        "email":"malek@gmail.com",
        "phone_number":"00962799321174",
        "role":"instructor",
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
describe('course testing',()=>{
        // add course
        test('POST to /course to create new course',async ()=>{
            const response = await request.post('/course').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            }).send({
                "id":1,
                "name":"JS" ,
                "description": "this is javaScript course",
                "syllabus":"STRING" ,
                "start_date": "2012-2-2",
                "end_date": "2013-1-4",
                "department_id":1    
            })
            
            expect(response.status).toBe(201)
        })

        // update course
        test('PUT to /course/:id to update course',async ()=>{
            const response = await request.put('/course/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            }).send({
                "id":1,
                "name":"JavaScript" ,
                "description": "this is javaScript course",
                "syllabus":"STRING" ,
                "start_date": "2012-2-2",
                "end_date": "2013-1-4",
                "department_id":1   
            })
            
            expect(response.status).toBe(200)
        })

        // course employees
        test('GET to /coursesections to show the course sections',async ()=>{
            sectionsModel.create({
                "id":1,
                "course_id":1,
                "year": 2023,
                "semester":"first",
                "name":"js_A",
                "room_no":"202",
                "status": "Online",
                "building":"1",
                "days": "sun,tues",
                "institution_id": 1,
                "capacity": 20,
                "instructor_id":3
            })
            sectionsModel.create({
                "id":2,
                "course_id":1,
                "year": 2023,
                "semester":"first",
                "name":"js_B",
                "room_no":"202",
                "status": "Online",
                "building":"1",
                "days": "mon,wed",
                "institution_id": 1,
                "capacity": 20,
                "instructor_id":3
            })
            const response = await request.get('/coursesections/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            })
            
            expect(response.status).toBe(200)
            expect(response.body.count).toEqual(2)
        })


        // show one course 
        test('GET to /course/:id to show course accourding to its id',async ()=>{
            
            
            const response = await request.get('/course/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            })
            
            expect(response.status).toBe(200)
        })

        // delete course
        test('DELETE to /course/:id to delete the course',async ()=>{
            
            const response = await request.delete('/course/1').set({
                authorization:`Bearer ${jwt.sign({email:'ltuc@gmail.com'},Secret)}`
            })
            
            expect(response.status).toBe(204)
        })
        
})
afterAll(async () => {
    await sequelize.drop();
});
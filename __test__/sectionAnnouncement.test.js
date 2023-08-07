const server =require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)
const {sequelize}= require('../src/model/index')
const base64 = require('base-64')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Secret = process.env.SECRET
const {usersModel,departmentsModel,institutionModel,announcementModel,sectionsModel,coursesModel}= require('../src/model/relations')

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
    coursesModel.create({
        "id":1,
        "name":"JS" ,
        "description": "this is javaScript course",
        "syllabus":"STRING" ,
        "start_date": "2012-2-2",
        "end_date": "2013-1-4",
        "department_id":1 
    })
    sectionsModel.create({
        "id":1,
        'course_id':1,
        'year': 2023,
        'semester':'first',
        'name':'js_A',
        'room_no':"202",
        'status': 'Online',
        'building':'1',
        'days': 'sun,tues',
        'institution_id': 1,
        'capacity': 20
    })
});
describe('sectionAnnouncement testing',()=>{
        // add sectionAnnouncement
        test('POST to /sectionAnnouncement to create new sectionAnnouncement',async ()=>{
            const response = await request.post('/sectionAnnouncement').set({
                authorization:`Bearer ${jwt.sign('username:LTUC',Secret)}`
            }).send({
                "id":1,
                "title":"welcoming " ,
                "body": "Welcome to our class, I would like to remide you to bring a notebook on sunday, We will start immediatly",
                "section_id":1 
            })
            
            expect(response.status).toBe(201)
        })

        // update sectionAnnouncement
        test('PUT to /sectionAnnouncement/:id to update sectionAnnouncement',async ()=>{
            const response = await request.put('/sectionAnnouncement/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            }).send({
                "id":1,
                "title":"welcoming and some instructions" ,
                "body": "Welcome to our class, I would like to remide you to bring a notebook on sunday, We will start immediatly",
                "section_id":1     
            })
            
            expect(response.status).toBe(200)
        })

        //sectionAnnouncement of one section
        test('GET to /sectionAnnouncements/:id to show Announcements of one section',async ()=>{
            
            const response = await request.get('/sectionAnnouncements/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            })
            
            expect(response.status).toBe(200)
        })

        

        // delete sectionAnnouncement
        test('DELETE to /sectionAnnouncement/:id to delete the sectionAnnouncement',async ()=>{
            
            const response = await request.delete('/sectionAnnouncement/1').set({
                authorization:`Basic ${base64.encode('ltuc@gmail.com:12345')}`
            })
            
            expect(response.status).toBe(204)
        })
        
})
afterAll(async () => {
    await sequelize.drop();
});
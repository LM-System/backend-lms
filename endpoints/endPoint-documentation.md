# Documentation

### baseUrl 
<hr>

http://localhost:3000

## EndPoint  


























































































































































































































































































































































* ### Signin Endpoint:

   **Endpoint**:  /signin/  
   **method** : Post

    ```JSON
    body:{
        "email":"    " ,//Your Email
        "password": "   ",//Your password
    }
    ```

    **The respose will be :**

    ```JSON
    response:{
    "id"://id
    }
    ```   


* ## announcement Endpoint:

   **Endpoint**:  /institutionannouncements/:id  
   **method** : GET

    **The respose will be :**

    ```JSON
    [
      {
        "title": "STRING",
        "body": "STRING"
      },
      {
        "title": "STRING",
        "body": "STRING"
      },
      {
        "title": "STRING",
        "body": "STRING"
      }
    ]
    ```
    
   **Endpoint**:  /announcement       
   **method** : POST

    **The req.body must be :**
    ```JSON
    {
        "title":"STRING" ,
        "body": "STRING",
        "institution_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 2,
      "title": "STRING",
      "body": "STRING",
      "institution_id": 4,
      "updatedAt": "2023-08-03T07:37:54.510Z",
      "createdAt": "2023-08-03T07:37:54.510Z"
    }
    ```


   **Endpoint**:  /announcement/:id       
   **method** : PUT

    **The req.body must be :**
    ```JSON
    {
        "title":"STRING" ,
        "body": "STRING",
        "institution_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 2,
      "title": "STRING",
      "body": "STRING",
      "institution_id": 4,
      "updatedAt": "2023-08-03T07:37:54.510Z",
      "createdAt": "2023-08-03T07:37:54.510Z"
    }
    ```


   **Endpoint**:  /announcement/:id       
   **method** : DELETE     
   

   
* ## sectionAnnouncement Endpoint:

   **Endpoint**:  /sectionAnnouncement/:id  
   **method** : GET

    **The respose will be :**

    ```JSON
    [
      {
        "id": 2,
        "title": "STRING",
        "body": "STRING",
        "section_id": 4,
        "createdAt": "2023-08-03T09:32:38.861Z",
        "updatedAt": "2023-08-03T09:32:38.861Z"
      }
    ]
    ```
    
   **Endpoint**:  /sectionAnnouncement       
   **method** : POST

    **The req.body must be :**
    ```JSON
    {
        "title":"STRING" ,
        "body": "STRING",
        "section_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 2,
      "title": "STRING",
      "body": "STRING",
      "section_id": 4,
      "updatedAt": "2023-08-03T09:32:38.861Z",
      "createdAt": "2023-08-03T09:32:38.861Z"
    }
    ```


   **Endpoint**:  /sectionAnnouncement/:id       
   **method** : PUT

    **The req.body must be :**
    ```JSON
    {
        "title":"STRING" ,
        "body": "STRING",
        "section_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 2,
      "title": "STRING",
      "body": "STRING",
      "section_id": 4,
      "updatedAt": "2023-08-03T09:32:38.861Z",
      "createdAt": "2023-08-03T09:32:38.861Z"
    }
    ```


   **Endpoint**:  /sectionAnnouncement/:id       
   **method** : DELETE


* ## courses Endpoint:

   **Endpoint**:  /course/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "name": "STRING",
      "description": "STRING",
      "syllabus": "STRING",
      "start_date": "2012-01-10T22:00:00.000Z",
      "end_date": "2012-01-10T22:00:00.000Z",
      "department": {
        "id": 1,
        "name": "STRING"
      }
    }
    ```
    
   **Endpoint**:  /courseprerequisite/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
    }
    ```
    
   **Endpoint**:  /course       
   **method** : POST

    **The req.body must be :**
    ```JSON
    {
        "name":"STRING" ,
        "description": "STRING",
        "syllabus":"STRING" ,
        "start_date": "year-month-day",
        "end_date": "year-month-day",
        "department_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 3,
      "name": "STRING",
      "description": "STRING",
      "syllabus": "STRING",
      "start_date": "2012-01-10T22:00:00.000Z",
      "end_date": "2012-01-10T22:00:00.000Z",
      "department_id": 1,
      "updatedAt": "2023-08-03T07:21:32.584Z",
      "createdAt": "2023-08-03T07:21:32.584Z"
    }
    ```


   **Endpoint**:  /course/:id       
   **method** : PUT

    **The req.body must be :**
    ```JSON
    {
        "name":"STRING" ,
        "description": "STRING",
        "syllabus":"STRING" ,
        "start_date": "year-month-day",
        "end_date": "year-month-day",
        "department_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 3,
      "name": "STRING",
      "description": "STRING",
      "syllabus": "STRING",
      "start_date": "2012-01-10T22:00:00.000Z",
      "end_date": "2012-01-10T22:00:00.000Z",
      "department_id": 1,
      "updatedAt": "2023-08-03T07:21:32.584Z",
      "createdAt": "2023-08-03T07:21:32.584Z"
    }
    ```


   **Endpoint**:  /course/:id       
   **method** : DELETE


* ## departments Endpoint:

   **Endpoint**:  /departmentcourses/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "count": 3,
      "rows": [
        {
          "id": 1,
          "name": "STRING",
          "description": "STRING",
          "start_date": "year-month-day",
          "end_date": "year-month-day"
        },
        {
          "id": 2,
          "name": "STRING",
          "description": "STRING",
          "start_date": "year-month-day",
          "end_date": "year-month-day"
        },
        {
          "id": 3,
          "name": "STRING",
          "description": "STRING",
          "start_date": "year-month-day",
          "end_date": "year-month-day"
        }
      ]
    }
    ```
    
   **Endpoint**:  /departmentinstructors/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "count": 3,
      "rows": [
        {
          "id": 4,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "instructor",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 5,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "instructor",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 6,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "instructor",
          "image": "STRING",
          "address": "STRING"
        }
      ]
    }
    ```
    
   **Endpoint**:  /departmentstudents/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "count": 3,
      "rows": [
        {
          "id": 4,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "student",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 5,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "student",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 6,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "student",
          "image": "STRING",
          "address": "STRING"
        }
      ]
    }
    ```
    
   **Endpoint**:  /department/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "id": 2,
      "name": "STRING",
      "department_head": {
        "username": "STRING",
        "email": "STRING",
        "gender": "STRING",
        "birth_date": "year-month-day",
        "role": "institution"
      }
    }
    ```
    
    
   **Endpoint**:  /department       
   **method** : POST

    **The req.body must be :**
    ```JSON
    {
        "name":"STRING" ,
        "institution_id":1, //integer
        "user_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 7,
      "name": "STRING",
      "institution_id": 2,
      "user_id": 5,
      "updatedAt": "2023-08-02T17:52:37.316Z",
      "createdAt": "2023-08-02T17:52:37.316Z"
    }
    ```


   **Endpoint**:  /department/:id       
   **method** : PUT

    **The req.body must be :**
    ```JSON
    {
        "name":"STRING" ,
        "institution_id":1, //integer
        "user_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
      "id": 7,
      "name": "STRING",
      "institution_id": 2,
      "user_id": 5,
      "updatedAt": "2023-08-02T17:52:37.316Z",
      "createdAt": "2023-08-02T17:52:37.316Z"
    }
    ```


   **Endpoint**:  /department/:id       
   **method** : DELETE


* ## institutions Endpoint:

   **Endpoint**:  /institutions  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "count": 2,
      "rows": [
        {
          "id": 2,
          "name": "STRING",
          "address": "STRING",
          "phone_number": "STRING",
          "logo": "STRING",
          "institution_credentials": "STRING",
          "email": "STRING",
          "user_id": 2,
          "createdAt": "2023-08-02T17:26:25.637Z",
          "updatedAt": "2023-08-02T17:26:25.637Z"
        }
        {
          "id": 3,
          "name": "STRING",
          "address": "STRING",
          "phone_number": "STRING",
          "logo": "STRING",
          "institution_credentials": "STRING",
          "email": "STRING",
          "user_id": 4,
          "createdAt": "2023-08-02T17:26:25.637Z",
          "updatedAt": "2023-08-02T17:26:25.637Z"
        }
      ]
    }
    ```
    
   **Endpoint**:  /institution/:name  
   **method** : GET

    **The response will be :**

    ```JSON
    [
      {
        "id": 2,
        "name": "name",
        "address": "STRING",
        "phone_number": "STRING",
        "logo": "STRING",
        "institution_credentials": "STRING",
        "email": "STRING",
        "user_id": 2,
        "createdAt": "2023-08-02T17:26:25.637Z",
        "updatedAt": "2023-08-02T17:26:25.637Z"
      }
    ]
    ```
    
   **Endpoint**:  /institutiondepartments/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "count": 2,
      "rows": [
        {
          "id": 2,
          "name": "STRING",
          "institution_id": 2,
          "user_id": 2,
          "createdAt": "2023-08-02T17:49:43.126Z",
          "updatedAt": "2023-08-02T17:49:43.126Z"
        },
        {
          "id": 3,
          "name": "STRING",
          "institution_id": 2,
          "user_id": 3,
          "createdAt": "2023-08-02T17:49:46.985Z",
          "updatedAt": "2023-08-02T17:49:46.985Z"
        },

      ]
    }
    ```
    
   **Endpoint**:  /institutionemployees/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
      "count": 4,
      "rows": [
        {
          "id": 9,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "instructor",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 10,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "instructor",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 11,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "instructor",
          "image": "STRING",
          "address": "STRING"
        },
        {
          "id": 12,
          "username": "STRING",
          "email": "STRING",
          "gender": "STRING",
          "birth_date": "year-month-day",
          "phone_number": "STRING",
          "role": "departmentHead",
          "image": "STRING",
          "address": "STRING"
        }
      ]
    }
    ```
    
   **Endpoint**:  /institutionstudents/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "count": 4,
        "rows": [
          {
            "id": 1,
            "username": "STRING",
            "email": "STRING",
            "gender": "STRING",
            "birth_date": "year-month-day",
            "phone_number": "STRING",
            "image": "STRING",
            "address": "STRING"
          },
          {
            "id": 2,
            "username": "STRING",
            "email": "STRING",
            "gender": "STRING",
            "birth_date": "year-month-day",
            "phone_number": "STRING",
            "image": "STRING",
            "address": "STRING"
          },
          {
            "id": 3,
            "username": "STRING",
            "email": "STRING3",
            "gender": "STRING",
            "birth_date": "year-month-day",
            "phone_number": "STRING",
            "image": "STRING",
            "address": "STRING"
          },
          {
            "id": 4,
            "username": "STRING",
            "email": "STRING5",
            "gender": "STRING",
            "birth_date": "year-month-day",
            "phone_number": "STRING",
            "image": "STRING",
            "address": "STRING"
          }
        ]
    }       
    ```
    
    
   **Endpoint**:  /institution       
   **method** : POST

    **The req.body must be :**
    ```JSON
    {
        "name":"STRING" ,
        "address": "STRING",
        "phone_number":"STRING" ,
        "logo": "STRING",
        "institution_credentials": "STRING",
        "email": "STRING",
        "user_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
        "id": 1,  
        "name": "STRING",
        "address": "STRING",
        "phone_number": "STRING",
        "logo": "STRING",
        "institution_credentials": "STRING",
        "email": "STRING",
        "user_id": 1,  // integer
        "updatedAt": "2023-08-02T17:26:25.637Z",
        "createdAt": "2023-08-02T17:26:25.637Z"
    }
    ```


   **Endpoint**:  /institution/:id       
   **method** : PUT

    **The req.body must be :**
    ```JSON
    {
        "name":"STRING" ,
        "address": "STRING",
        "phone_number":"STRING" ,
        "logo": "STRING",
        "institution_credentials": "STRING",
        "email": "STRING",
        "user_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
        "id": 1,  
        "name": "STRING",
        "address": "STRING",
        "phone_number": "STRING",
        "logo": "STRING",
        "institution_credentials": "STRING",
        "email": "STRING",
        "user_id": 1,  // integer
        "updatedAt": "2023-08-02T17:26:25.637Z",
        "createdAt": "2023-08-02T17:26:25.637Z"
    }
    ```


   **Endpoint**:  /institution/:id       
   **method** : DELETE



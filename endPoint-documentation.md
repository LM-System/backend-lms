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

   **Endpoint**:  /announcements  
   **method** : GET

    **The respose will be :**

    ```JSON
    {
        "id"://id
    }
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
        "id"://id
    }
    ```


   **Endpoint**:  /announcement/:id       
   **method** : PUT

    **The req.body must be :**
    ```JSON
    {
        "title":"STRING" ,
        "body": "STRING",
        "user_id":1 //integer
    }
    ```

    **The respose will be :**

    ```JSON
    {
        "id"://id
    }
    ```


   **Endpoint**:  /announcement/:id       
   **method** : DELETE

   
* ## sectionAnnouncement Endpoint:

   **Endpoint**:  /sectionAnnouncement/:id  
   **method** : GET

    **The respose will be :**

    ```JSON
    {
        "id"://id
    }
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
        "id"://id
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
        "id"://id
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
        "id"://id
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
        "id":1//id
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
        "id"://id
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
        "id"://id
    }
    ```
    
   **Endpoint**:  /departmentinstructors/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
    }
    ```
    
   **Endpoint**:  /departmentstudents/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
    }
    ```
    
   **Endpoint**:  /department/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
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
        "id"://id
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
        "id"://id
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
        "id"://id
    }
    ```
    
   **Endpoint**:  /institution/:name  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
    }
    ```
    
   **Endpoint**:  /institutiondepartments/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
    }
    ```
    
   **Endpoint**:  /institutionemployees/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
    }
    ```
    
   **Endpoint**:  /institutionstudents/:id  
   **method** : GET

    **The response will be :**

    ```JSON
    {
        "id"://id
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
    "id"://id
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
    "id"://id
    }
    ```


   **Endpoint**:  /institution/:id       
   **method** : DELETE



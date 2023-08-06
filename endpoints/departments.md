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


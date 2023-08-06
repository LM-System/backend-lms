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



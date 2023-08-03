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


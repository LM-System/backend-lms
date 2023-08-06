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
   

 
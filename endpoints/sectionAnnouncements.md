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


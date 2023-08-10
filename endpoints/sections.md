- ### Section Endpoints:

  **Endpoint**: /section/  
   **method** : get


  **The respose will be :**

  ```JSON
  response:{
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
        "capacity": 20
    }
  ```

  **Endpoint**: /section/:id  
   **method** : get

  **The respose will be :**

  ```JSON
  response:{
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
        "capacity": 20
    }
  ```

  **Endpoint**: /section
  **method** : post

  ```JSON
  body:{
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
        "capacity": 20
    }
  ```

  **The respose will be :**

  ```JSON
  response:{
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
        "capacity": 20
    }
  ```

  **Endpoint**: /section/:id
  **method** : put

  ```JSON
  body:{
        "id":1,
        "course_id":1,
        "year": 2023,
        "semester":"spring",
        "name":"js_A",
        "room_no":"202",
        "status": "Online",
        "building":"1",
        "days": "sun,tues",
        "institution_id": 1,
        "capacity": 20
    }
  ```

  **The respose will be :**

  ```JSON
  response:{
        "id":1,
        "course_id":1,
        "year": 2023,
        "semester":"spring",
        "name":"js_A",
        "room_no":"202",
        "status": "Online",
        "building":"1",
        "days": "sun,tues",
        "institution_id": 1,
        "capacity": 20
    }
  ```

  **Endpoint**: /section/:id
  **method** : delete

  **The respose will be :**

  ```JSON
  response:"Record Deleted"
  ```

  **Endpoint**: /classlist/:id
  **method** : get

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

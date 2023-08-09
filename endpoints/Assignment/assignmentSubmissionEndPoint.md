# Assignments End Points

- ## Assignment Submission Endpoint:

  **Endpoint**: /assignmentSubmittion  
   **method** : Post

  ```JSON
  body:{
   "content":" ",  // String value
   "status":" ", // String value
   "priority":" ", // String value
   "assignment_id":" ", //Integer Value
   "student_id":" ", //Integer Value
   "assignmentSubmissionFile":" " // File to submit
  }
  ```

  **The respose will be :**

  ```JSON
  response:{
    "message": "Assignment submission created with attachment.",
    "assignmentSubmission": {
        "id": 1,
        "content": "Submit passed on",
        "status": "Submitted",
        "priority": "High ",
        "assignment_id": 1,
        "student_id": 1,
        "attachment": "assets/assignmentSubmissionFile-1691494133823-541095121.png",
        "updatedAt": "2023-08-08T11:28:53.881Z",
        "createdAt": "2023-08-08T11:28:53.881Z"
    }
  }
  ```

---

**Endpoint**: /assignmentSubmittion<br>
**method** : get

**The respose will be :**

```JSON
response:{
[
    {
        "id": 5,
        "content": "assignmentSubmittion 2",
        "status": "Submitted",
        "priority": "Low",
        "assignment_id": 1,
        "student_id": 2,
        "createdAt": "2023-08-05T13:09:42.635Z",
        "updatedAt": "2023-08-05T13:15:36.343Z",
        "assignment": {
            "id": 1,
            "section_id": 1,
            "title": "Sample Assignment 1 ",
            "description": "This is a sample assignment.",
            "due_date": "2023-08-10T00:00:00.000Z",
            "status": "Pending",
            "priority": "High",
            "createdAt": "2023-08-03T10:22:19.050Z",
            "updatedAt": "2023-08-03T10:22:19.050Z"
        },
        "user": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFidUVzc2EiLCJpYXQiOjE2OTEyNDU3Njl9.ZJD1NDfSp7y2EwlxbVjH4FFMUX1Z-CGOn51S0GidP7I",
            "id": 2,
            "username": "AbuEssa",
            "password": "$2b$12$3kuVa4XfkCjuUBGiuGjp5OhxkkWNpdFaERbFue9eUbtjDYMNO9XWa",
            "email": "user1@gmail.com",
            "gender": "male",
            "birth_date": "2023-08-15T00:00:00.000Z",
            "phone_number": "079",
            "image": "/c",
            "role": "student",
            "institution_id": null,
            "department_id": null,
            "bio": null,
            "address": null,
            "createdAt": "2023-08-05T12:25:33.782Z",
            "updatedAt": "2023-08-05T12:25:33.782Z"
        }
    }
]

}
```

---

**Endpoint**: /assignmentSubmittion/:id<br>
**method** : get

**The respose will be :**

```JSON
response:{
    "id": 5,
    "content": "assignmentSubmittion 2",
    "status": "Submitted",
    "priority": "Low",
    "assignment_id": 1,
    "student_id": 2,
    "createdAt": "2023-08-05T13:09:42.635Z",
    "updatedAt": "2023-08-05T13:15:36.343Z"
}
```

---

**Endpoint**: /assignmentSubmittion/:id<br>
**method** : put

```JSON
  body:{
    "id": 5,
    "content": "assignmentSubmittion 2",
    "status": "Submitted",
    "priority": "High",
    "assignment_id": 1,
    "student_id": 2
}
```

**The respose will be :**

```JSON
response:{
    "id": 5,
    "content": "assignmentSubmittion 2",
    "status": "Submitted",
    "priority": "High",
    "assignment_id": 1,
    "student_id": 2,
    "createdAt": "2023-08-05T13:09:42.635Z",
    "updatedAt": "2023-08-05T14:31:13.664Z"
}
```

---

**Endpoint**: /assignmentSubmittion/:id<br>
**method** : delete

**The respose will be :**

```JSON
response:{
  "id": 1,
  "section_id": 1,
  "title": "Sample Assignment edit",
  "description": "This is a sample assignment.",
  "due_date": "2023-08-10T00:00:00.000Z",
  "status": "Pending",
  "priority": "High",
  "updatedAt": "2023-08-03T11:58:11.868Z",
  "createdAt": "2023-08-03T11:58:11.868Z"

}
```

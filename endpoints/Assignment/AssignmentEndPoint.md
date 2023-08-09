# Assignments End Points

- ## Assignment Endpoint:

  **Endpoint**: /assignment  
   **method** : Post

  ```JSON
  body:{

  "section_id": " ", //Integer Value
  "title": " ", // String value
  "description": " ", // String value
  "due_date": " ", // Date Value
  "status": " ", // String value
  "priority": " ",
  "assignmentFile": " " // String value that should be a file
  }
  ```

  **The respose will be :**

  ```JSON
  response:{
    "message": "Assignment created with attachment.",
    "assignment": {
        "id": 1,
        "section_id": 1,
        "title": "Example Assignment 2",
        "description": "This is an example assignment.",
        "due_date": "2023-08-15T00:00:00.000Z",
        "status": "in-progress",
        "priority": "high",
        "attachment": "assets/assignmentFile-1691493206868-419691138.png",
        "updatedAt": "2023-08-08T11:13:26.882Z",
        "createdAt": "2023-08-08T11:13:26.882Z"
    }
  }
  ```

---

**Endpoint**: /assignment<br>
**method** : get

**The respose will be :**

```JSON
response:{
[
  {
      "id": 2,
      "section_id": 1,
      "title": "Sample Assignment 2 ",
      "description": "This is a sample assignment.",
      "due_date": "2023-08-10T00:00:00.000Z",
      "status": "Pending",
      "priority": "High",
      "createdAt": "2023-08-03T10:22:22.714Z",
      "updatedAt": "2023-08-03T10:22:22.714Z",
      "section": {
          "id": 1,
          "course_id": null,
          "year": null,
          "semester": null,
          "name": null,
          "room_no": null,
          "status": "Offline",
          "building": null,
          "days": null,
          "institution_id": null,
          "capacity": null,
          "createdAt": "2023-08-03T10:22:13.313Z",
          "updatedAt": "2023-08-03T10:22:13.313Z",
          "attendance_id": null,
          "instructor_id": null
      },
      "assignment_submittions": []
  },
  {
      "id": 4,
      "section_id": 1,
      "title": "Sample Assignment 4 ",
      "description": "This is a sample assignment.",
      "due_date": "2023-08-10T00:00:00.000Z",
      "status": "Pending",
      "priority": "High",
      "createdAt": "2023-08-03T11:58:11.868Z",
      "updatedAt": "2023-08-03T11:58:11.868Z",
      "section": {
          "id": 1,
          "course_id": null,
          "year": null,
          "semester": null,
          "name": null,
          "room_no": null,
          "status": "Offline",
          "building": null,
          "days": null,
          "institution_id": null,
          "capacity": null,
          "createdAt": "2023-08-03T10:22:13.313Z",
          "updatedAt": "2023-08-03T10:22:13.313Z",
          "attendance_id": null,
          "instructor_id": null
      },
      "assignment_submittions": []
  },
  {
      "id": 1,
      "section_id": 1,
      "title": "Sample Assignment 1 ",
      "description": "This is a sample assignment.",
      "due_date": "2023-08-10T00:00:00.000Z",
      "status": "Pending",
      "priority": "High",
      "createdAt": "2023-08-03T10:22:19.050Z",
      "updatedAt": "2023-08-03T10:22:19.050Z",
      "section": {
          "id": 1,
          "course_id": null,
          "year": null,
          "semester": null,
          "name": null,
          "room_no": null,
          "status": "Offline",
          "building": null,
          "days": null,
          "institution_id": null,
          "capacity": null,
          "createdAt": "2023-08-03T10:22:13.313Z",
          "updatedAt": "2023-08-03T10:22:13.313Z",
          "attendance_id": null,
          "instructor_id": null
      },
      "assignment_submittions": []
  },
  {
      "id": 3,
      "section_id": 1,
      "title": "Sample Assignment 3 ",
      "description": "This is a sample assignment.",
      "due_date": "2023-08-10T00:00:00.000Z",
      "status": "Pending",
      "priority": "High",
      "createdAt": "2023-08-03T10:22:26.267Z",
      "updatedAt": "2023-08-03T10:22:26.267Z",
      "section": {
          "id": 1,
          "course_id": null,
          "year": null,
          "semester": null,
          "name": null,
          "room_no": null,
          "status": "Offline",
          "building": null,
          "days": null,
          "institution_id": null,
          "capacity": null,
          "createdAt": "2023-08-03T10:22:13.313Z",
          "updatedAt": "2023-08-03T10:22:13.313Z",
          "attendance_id": null,
          "instructor_id": null
      },
      "assignment_submittions": []
  }
]

}
```

---

**Endpoint**: /assignment/:id<br>
**method** : get

**The respose will be :**

```JSON
response:{
  "id": 1,
  "section_id": 1,
  "title": "Sample Assignment 1",
  "description": "This is a sample assignment.",
  "due_date": "2023-08-10T00:00:00.000Z",
  "status": "Pending",
  "priority": "High",
  "updatedAt": "2023-08-03T11:58:11.868Z",
  "createdAt": "2023-08-03T11:58:11.868Z"

}
```

---

**Endpoint**: /assignment/:id<br>
**method** : put

```JSON
  body:{
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

---

**Endpoint**: /assignment/:id<br>
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

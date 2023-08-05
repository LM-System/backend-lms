# Section Assignments End Points

- ## Assignment Endpoint:

**Endpoint**: /sectionAssignment<br>
**method** : get

**The respose will be :**

```JSON
response:{
[
    {
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
        "instructor_id": null,
        "assignments": [
            {
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
            {
                "id": 2,
                "section_id": 1,
                "title": "Sample Assignment 2 ",
                "description": "This is a sample assignment.",
                "due_date": "2023-08-10T00:00:00.000Z",
                "status": "Pending",
                "priority": "High",
                "createdAt": "2023-08-03T10:22:22.714Z",
                "updatedAt": "2023-08-03T10:22:22.714Z"
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
                "updatedAt": "2023-08-03T10:22:26.267Z"
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
                "updatedAt": "2023-08-03T11:58:11.868Z"
            }
        ]
    },
    {
        "id": 2,
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
        "createdAt": "2023-08-05T10:46:30.165Z",
        "updatedAt": "2023-08-05T10:46:30.165Z",
        "attendance_id": null,
        "instructor_id": null,
        "assignments": [
            {
                "id": 5,
                "section_id": 2,
                "title": "Sample Assignment 1 ",
                "description": "This is a sample assignment.",
                "due_date": "2023-08-10T00:00:00.000Z",
                "status": "Pending",
                "priority": "High",
                "createdAt": "2023-08-05T10:46:48.610Z",
                "updatedAt": "2023-08-05T10:46:48.610Z"
            },
            {
                "id": 6,
                "section_id": 2,
                "title": "Sample Assignment 2 ",
                "description": "This is a sample assignment.",
                "due_date": "2023-08-10T00:00:00.000Z",
                "status": "Pending",
                "priority": "High",
                "createdAt": "2023-08-05T10:46:52.744Z",
                "updatedAt": "2023-08-05T10:46:52.744Z"
            },
            {
                "id": 7,
                "section_id": 2,
                "title": "Sample Assignment 3 ",
                "description": "This is a sample assignment.",
                "due_date": "2023-08-10T00:00:00.000Z",
                "status": "Pending",
                "priority": "High",
                "createdAt": "2023-08-05T10:46:58.118Z",
                "updatedAt": "2023-08-05T10:46:58.118Z"
            },
            {
                "id": 8,
                "section_id": 2,
                "title": "Sample Assignment 4 ",
                "description": "This is a sample assignment.",
                "due_date": "2023-08-10T00:00:00.000Z",
                "status": "Pending",
                "priority": "High",
                "createdAt": "2023-08-05T10:47:04.848Z",
                "updatedAt": "2023-08-05T10:47:04.848Z"
            }
        ]
    }
]
}
```

---

**Endpoint**: /sectionAssignment/:id<br>
**method** : get

**The respose will be :**

```JSON
response:{
  [
    {
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
        "instructor_id": null,
        "assignments": [
            {
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
            {
                "id": 2,
                "section_id": 1,
                "title": "Sample Assignment 2 ",
                "description": "This is a sample assignment.",
                "due_date": "2023-08-10T00:00:00.000Z",
                "status": "Pending",
                "priority": "High",
                "createdAt": "2023-08-03T10:22:22.714Z",
                "updatedAt": "2023-08-03T10:22:22.714Z"
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
                "updatedAt": "2023-08-03T10:22:26.267Z"
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
                "updatedAt": "2023-08-03T11:58:11.868Z"
            }
        ]
    }

  ]

}
```

---

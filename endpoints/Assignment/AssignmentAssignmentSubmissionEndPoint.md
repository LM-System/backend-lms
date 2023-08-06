# Assignment Assignments Submission End Points

- ## Assignment Endpoint:

**Endpoint**: /assignmentAssignmentSubmission<br>
**method** : get

**The respose will be :**

```JSON
response:{
    [
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
        "assignment_submittions": [
            {
                "id": 6,
                "content": "assignmentSubmittion 2",
                "status": "Submitted",
                "priority": "High",
                "assignment_id": 1,
                "student_id": 2,
                "createdAt": "2023-08-05T14:31:42.934Z",
                "updatedAt": "2023-08-05T14:31:42.934Z"
            },
            {
                "id": 10,
                "content": "assignmentSubmittion 11",
                "status": "Submitted",
                "priority": "High",
                "assignment_id": 1,
                "student_id": 2,
                "createdAt": "2023-08-05T18:33:10.627Z",
                "updatedAt": "2023-08-05T18:33:10.627Z"
            }
        ]
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
        "updatedAt": "2023-08-03T10:22:22.714Z",
        "assignment_submittions": [
            {
                "id": 11,
                "content": "assignmentSubmittion 1",
                "status": "Submitted",
                "priority": "High",
                "assignment_id": 2,
                "student_id": 2,
                "createdAt": "2023-08-05T18:42:24.159Z",
                "updatedAt": "2023-08-05T18:42:24.159Z"
            },
            {
                "id": 12,
                "content": "assignmentSubmittion 2",
                "status": "Submitted",
                "priority": "High",
                "assignment_id": 2,
                "student_id": 2,
                "createdAt": "2023-08-05T18:42:28.883Z",
                "updatedAt": "2023-08-05T18:42:28.883Z"
            }
        ]
    },
]
}
```

---

**Endpoint**: /sectionAssignment/:id<br>
**method** : get

**The respose will be :**

```JSON
response:{
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
    "assignment_submittions": [
        {
            "id": 6,
            "content": "assignmentSubmittion 2",
            "status": "Submitted",
            "priority": "High",
            "assignment_id": 1,
            "student_id": 2,
            "createdAt": "2023-08-05T14:31:42.934Z",
            "updatedAt": "2023-08-05T14:31:42.934Z"
        },
        {
            "id": 10,
            "content": "assignmentSubmittion 11",
            "status": "Submitted",
            "priority": "High",
            "assignment_id": 1,
            "student_id": 2,
            "createdAt": "2023-08-05T18:33:10.627Z",
            "updatedAt": "2023-08-05T18:33:10.627Z"
        }
    ]
}
}
```

---

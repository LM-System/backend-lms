# Attendance Endpoints

**Endpoint**: /course/section_id/attendance
   **method** : GET
  **Response**:

```JSON
[{
   "id": "INTEGER",
   "date": "DATE",
   "section_id": "INTEGER"
}]
```

**Endpoint**: /course/section_id/attendance
   **method** : POST
   **ACL**: instructor
   **Body**:

```JSON
{
   "id": "INTEGER",
   "date": "DATE",
   "section_id": "INTEGER"
}
```

**Endpoint**: /course/:section_id/attendance/:attendance_id
   **method** : GET
   **Response**:
   **ACL**: student

```JSON
{
   "id": "INTEGER",
   "date": "DATE",
   "section_id": "INTEGER",
   "user_id": "INTEGER"
}
```

   **ACL**: instructors

```JSON
[{
   "id": "INTEGER",
   "date": "DATE",
   "section_id": "INTEGER",
   "user_id": "INTEGER"
}]
```

**Endpoint**: /course/:section_id/attendance/:attendance_id
   **method** : PUT
   **Body**:

```JSON
{
   "id": "INTEGER",
   "date": "DATE",
   "section_id": "INTEGER"
}
```

**Endpoint**: /course/:section_id/attendance/:attendance_id
   **method** : DELETE
   **Body**:

```JSON
{
   "id": "INTEGER",
}
```

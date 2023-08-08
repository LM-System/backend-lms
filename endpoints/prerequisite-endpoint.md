# Prerequisite Endpoints

**Endpoint**: /course/:course_id/prerequisite/:prerequisite_id
   **method** : POST
    **Body**:

  ```JSON
        {
          course_id: 'INTEGER'
          prerequisite_id: 'INTEGER'
        }
  ```


**Endpoint**: /course/:course_id/prerequisite
   **method** : GET
  **Response**:

  ```JSON
    [
      {
        course_id: 'INTEGER',
        prerequisite_id: 'INTEGER'
      },
      {
        course_id: 'INTEGER',
        prerequisite_id: 'INTEGER'
      },

    ]
  ```

const Course = require('../../../models/courses-model')

const getCourse = async (req, res, next) => {
  try {
    const courseId = req.params.course_id
    const course = await Course.findById(courseId);
    if(course) {
      res.status(200).json({
        status: 200,
        course: course
      })
    } else {
      res.status(404).json({
        status: 404,
        msg: 'Course does not exist'
      })
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}

module.exports = getCourse
const Courses = require('../../../models/courses-model')

const addCourse = async (req, res, next) => {
  try {
    const course = new Courses(req.body);
    await course.save()
    res.status(201).json({
      status: 201,
      addedCourse: course
    })
  } catch (err) {
    console.log('Error: ', err)
  }
}

module.exports = addCourse
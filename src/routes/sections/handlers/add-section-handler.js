const Sections = require('../../../models/sections-model')
const Courses = require('../../../models/courses-model')

const addSections = async (req, res, next) => {
  try {
    //Add Section
    const section = new Sections(req.body)
    await section.save()
    
    //Find Course and Add Section to that Course
    const courseId = req.params.course_id;
    const course = await Courses.findById(courseId);
    if(course) {
      course.sections.push(section._id);
      await course.save();
      res.status(201).json({
        status: 201,
        msg: 'Section Added Successfully',
        section: section
      })
    } else {
      res.status(404).json({
        status: 404,
        msg: 'Course not found'
      })
    }
  } catch(err) {
    console.log("Error: ", err)
  }
}

module.exports = addSections;
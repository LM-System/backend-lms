const Sections = require('../../../models/sections-model')
const Users = require('../../../models/users-model')
// sectionsRoutes.post("/section/:section_id/:user_id", (req, res, next) => addStudent(req, res, next));

const addStudent = async (req, res, next) => {
  try {
    // Find Section
    const sectionId = req.params.section_id
    const section = await Sections.findById(sectionId)
    // Find User
    const userId = req.params.user_id
    const user = await Users.findById(userId)
    // Add user to the users array 
    section.students.push(user._id)
    await section.save()
    
    res.status(201).json({
      status: 201,
      msg: 'User Added Successfully',
      user: user
    })
  } catch (err) {
    console.log('Error: ', err)
  }
}

module.exports = addStudent
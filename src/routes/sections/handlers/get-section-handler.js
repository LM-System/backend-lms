const Sections = require('../../../models/sections-model')

const getSection = async(req, res, next) => {
  try{
    const sectionId = req.params.section_id
    const section = await Sections.findById(sectionId)
    if(section) {
      res.status(200).json({
        status: 200,
        msg: 'Section found',
        section: section
      })
    } else {
      res.status(404).json({
        status: 404,
        msg: 'Section does not exist'
      })
    }
  } catch (err) {
    console.log('Error: ', err)
  }
}

module.exports = getSection;
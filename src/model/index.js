require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};
const POSTGRES_URI =
  process.env.NODE_ENV === "test"
    ? "sqlite::memory:"
    : process.env.DATABASE_URL;
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const usersModel = require("../auth/model/users/user.model")(
  sequelize,
  DataTypes
);
const studentsModel = require("./student/student.model")(sequelize, DataTypes);
const instructorsModel = require("./instructor/instructor.model")(
  sequelize,
  DataTypes
);
const adminsModel = require("./admin/admin.model")(sequelize, DataTypes);

const coursesModel = require("./courses/courses.model")(sequelize, DataTypes);
const sectionsModel = require("./sections/sections.model")(
  sequelize,
  DataTypes
);
const studentSectionModel = require("./studentSection/studentSection.model")(
  sequelize,
  DataTypes
);

const departmentsModel = require("./department/departments.model")(
  sequelize,
  DataTypes
);
const institutionModel = require("./institution/institution.model")(
  sequelize,
  DataTypes
);
const announcementModel = require("./announcement/announcement")(
  sequelize,
  DataTypes
);

const sectionِAnnouncementModel = require("./sections/sectionAnnouncement")(
  sequelize,
  DataTypes
);
const attendanceModel = require("./attendance/attendance")(
  sequelize,
  DataTypes
);
const assignmentModel = require("./assignment/assignment")(
  sequelize,
  DataTypes
);
const studentAssignmentSubmission =
  require("./assignment/studentAssignmentSubmission")(sequelize, DataTypes);
const contentModel = require("./sections/content")(sequelize, DataTypes);
// const prerequisiteModel = require('./courses/prerequisite')(sequelize, DataTypes)
// const chatsModel = require('./chat/chat')(sequelize, DataTypes)
// const feedbackModel = require('./feedback/feedback')(sequelize, DataTypes)

module.exports = {
  sequelize,
  DataTypes,

  usersModel,
  adminsModel,
  studentsModel,
  instructorsModel,

  coursesModel,
  sectionsModel,
  studentSectionModel,
  sectionِAnnouncementModel,
  attendanceModel,
  assignmentModel,
  studentAssignmentSubmission,
  contentModel,

  departmentsModel,
  institutionModel,
  announcementModel,

  // prerequisiteModel,
  // chatsModel,
  // feedbackModel
};

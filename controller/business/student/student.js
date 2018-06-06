import moment from "moment";
import Student from '../../../model/business/student'

class StudentHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  async save(req, res, next) {
    let student = Student.build({
      ...req.body
    });
    try {
      student = await student.save();

      res.send({ msg: student})
    } catch (err) {
      console.log(err)
      res.send({err: err})
    }
  }

  async findById(req, res, next) {
    let id = req.query.id;
    try {
      let student = await Student.findAll({
        where: {
          id: req.query.id
        }
      });

      res.send(student);
    } catch (error) {
      console.log(error);
      res.send({msg: error})
    }
  }
}
export default new StudentHandler()

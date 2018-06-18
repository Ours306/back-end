import moment from "moment";
import Student from '../../../model/business/student'

class StudentHandler {
  constructor() {
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  async save(req, res, next) {
    let student = Student.build({
      ...req.body
    });
    try {
      student = await student.save();

      res.send(student)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    let id = {...req.body}.id;
    try {
      let result = await Student.destroy({
        where: {
          id: id
        }
      })
      console.log(result);
      res.send({result});
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let student = await Student.update({
        ...req.body
      }, {
          where: {
            id: { ...req.body }.id
          }
        });

      res.send(student)
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      let students = await Student.findAll();

      res.send(students);
    } catch (error) {
      next(error);
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
      next(error);
    }
  }
}
export default new StudentHandler()

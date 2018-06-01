import query from '../../config/db'
import moment from "moment";
import { StringDecoder } from 'string_decoder';

class StudentHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  async save(req, res, next) {
    let student = req.body;
    try {
      let sql = `insert into student set name = ?, age = ?, birth = ?, idcard = ? `;
      let data = await query(sql, [student.name, student.age, student.birth, student.idcard])

      res.send({ msg: data})
    } catch (err) {
      console.log(err)
      res.send({mes: err})
    }
  }

  async findById(req, res, next) {
    let id = req.query.id;
    try {
      let sql = `select * from student where id = ?`
      let data = await query(sql, [id]);

      res.send(data);
    } catch (error) {
      console.log(err);
      res.send({msg: error})
    }
  }
}
export default new StudentHandler()

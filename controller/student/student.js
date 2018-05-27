import db from '../../config/db'
import moment from "moment";

class StudentHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  save(req, res, next) {
    let student = req.body;
    try {
      let sql = 'insert into student (name, age, birth, idcard) values ("' + student.name + '","' + student.age + '","' + moment(student.birth).format('YYYY-MM-DD HH:mm:ss') + '","' + + student.idCard + '")';
      console.log(sql);
      db.query(sql,function(err, rows) {
        if(err) {
          res.send('新增失败' + err);
        }
        else {
          console.log('插入成功')
          res.send(rows);
        }
      })
    } catch (err) {
      throw err;
    }
  }
}
export default new StudentHandler()

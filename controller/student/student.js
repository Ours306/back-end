import db from '../../config/db'

class StudentHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  save(req, res, next) {
    let student = req.body;
    console.log(student)
    try {
      let sql = 'insert into student (name, age, birth) values ("' + student.name + '","' + student.age + '","' + student.birth + '")';
      console.log(sql);
      db.query(sql,function(err, rows) {
        if(err) {
          res.send('新增失败');
        }
        else {
          res.send(rows);
        }
      })
    } catch (err) {
      throw err;
    }
  }
}
export default new StudentHandler()

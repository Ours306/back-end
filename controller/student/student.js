class StudentHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  save(req, res, next) {
    res.send({msg: '暂未实现此接口'})
  }
}
export default new StudentHandler()

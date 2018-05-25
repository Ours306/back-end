class UserHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  save(req, res, next) {
    console.log('调用UserHandler.save')
    res.send({mes: '接口未实现'})
  }
}
export default new UserHandler()

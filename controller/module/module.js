class ModuleHandler {
  constructor() {
    this.save = this.save.bind(this)
    this.edit = this.edit.bind(this)
    this.findAll = this.findAll.bind(this)
  }

  save(req, res, next) {
    res.send()
  }

  edit(req, res, next) {
    res.send({msg: '接口未实现'})
  }

  findAll(req, res, next) {
    const data = {
      name: 'modules',
      nodes: [{
        id: 1,
        name: '信息管理',
        nodes: [{
          id: 1.1,
          name: '学生管理',
          router: '/student/studentList'
        }, {
          id: 1.2,
          name: '教师管理',
          router: '/teacher/teacherList'
        }, {
          id: 1.3,
          name: '学校管理',
          nodes: [{
            id: '1.3.1',
            name: '财产管理'
          }, {
            id: '1.3.2',
            name: '教室管理'
          }]
        }]
      },
      {
        id: 2,
        name: '动态表单',
        nodes: [{
          id: 2.1,
          name: '表单管理',
          router: '/formDesign/Addform'
        }]
      }]
    }
    res.send(data)
  }
}
export default new ModuleHandler()

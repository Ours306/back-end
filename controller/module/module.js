import Module from '../../model/module'

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

  async findAll(req, res, next) {
    try {
      let queue = [];
      let modules = await Module.findAll({
        attributes: ["name", "parentId", "id", "router", "hasChild"],
        order: ['parentId']
      });
      let root = modules[0];//根模块
      queue.push(root);
      while(queue.length != 0) {
        let temp = queue.shift();
        temp.setDataValue('nodes', []);
        for(let module of modules) {
          if (module.parentId === temp.id) {
            temp.dataValues.nodes.push(module);
            queue.push(module);
          }
        }
      }
      res.send(root)
    } catch (err) {
      console.log(err)
      res.send({err})
    }
  }

}
export default new ModuleHandler()

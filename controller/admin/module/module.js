import Module from '../../../model/admin/module'
import Generate from '../../../plugins/generate'

class ModuleHandler {
  constructor() {
    this.save = this.save.bind(this)
    this.edit = this.edit.bind(this)
    this.findAll = this.findAll.bind(this)
    this.generateCode = this.generateCode.bind(this)
  }

  save(req, res, next) {
    res.send()
  }

  edit(req, res, next) {
    res.send({msg: '接口未实现'})
  }

  /**
   * 采用树的遍历方式得出模块
   */
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

  async generateCode(req, res, next) {
    try {
      let entity = { ...req.body };

      Generate.generateModle(entity, entity.path);
      Generate.generateController(entity.entityName, entity.path);
      Generate.generateRoute(entity.entityName, entity.path);
      res.send(entity)
    } catch (error) {
      next(error);
    }
  }

}
export default new ModuleHandler()
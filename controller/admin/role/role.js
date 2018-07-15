import Role from '../../../model/admin/role'

class RoleHandler {
  constructor() {
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
  }

  async save(req, res, next) {
    let role = Role.build({
      ...req.body
    });
    try {
      role = await role.save();

      res.send(role)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    let id = {...req.body}.id;
    try {
      let result = await Role.destroy({
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
      let role = await Role.update({
        ...req.body
      }, {
          where: {
            id: { ...req.body }.id
          }
        });

      res.send(role)
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      let roles = await Role.findAll();

      res.send(roles);
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    let id = req.query.id;
    try {
      let roles = await Role.findAll({
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
export default new RoleHandler()

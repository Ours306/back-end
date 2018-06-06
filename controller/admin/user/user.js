import moment from "moment";
import User from '../../../model/admin/user';

class UserHandler {
  constructor() {
    this.save = this.save.bind(this)
  }

  async save(req, res, next) {
    let user = User.build({
      ...req.body
    });
    try {
      user = await user.save();

      res.send({ mes: user })
    } catch (err) {
      res.send({err})
    }
  }

  async edit(req, res, next) {
    try {
      let user = await User.update({
        ...req.body
      }, {
        where: {
          id: {...req.body}.id
        }
      });

      res.send({msg: user})
    } catch (err) {
      res.send({ err})
    }
  }

  async findAll(req, res, next) {
    try {
      let users = await User.findAll();

      res.send({msg: users});
    } catch (err) {
      res.send(err)
    }
  }
}
export default new UserHandler()

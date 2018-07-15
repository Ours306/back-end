import moment from "moment";
import User from '../../../model/admin/user';

class UserHandler {
  constructor() {
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async save(req, res, next) {
    let user = User.build({
      ...req.body
    });
    try {
      user = await user.save();

      res.send(user)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    let id = {...req.body}.id;
    try {
      let result = await User.destroy({
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
      let user = await User.update({
        ...req.body
      }, {
        where: {
          id: {...req.body}.id
        }
      });

      res.send(user)
    } catch (err) {
      next(err);
    }
  }

  async findAll(req, res, next) {
    try {
      let users = await User.findAll();

      res.send(users);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      let obj = {...req.body};

      let tel = obj.tel;
      let password = obj.password;
      let users = await User.findAll({
        where: {
          tel
        }
      });
      if(users[0].password === password) {
        req.session.username = users[0].name;
        res.send(users)
      }
      else {
        next('用户不存在或密码错误!')
      }
    } catch (error) {
      next(error);
    }
  }
}
export default new UserHandler()

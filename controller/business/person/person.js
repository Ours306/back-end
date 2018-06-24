import Person from '../../../model/business/person'

class PersonHandler {
    constructor() {
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
    }

    async save(req, res, next) {
        let person = Person.build({
            ...req.body
        })

        try {
            person = await person.save();

            res.send(person)
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        let id = {...req.body}.id;
        try {
            let result = await Person.destroy({
                where: {
                    id: id
                }
            })
            res.send({result});
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let person = await Person.update({
            ...req.body
            }, {
                where: {
                    id: { ...req.body }.id
                }
            });

            res.send(person)
        } catch (error) {
            next(error);
        }
    }

    async findAll(req, res, next) {
        try {
            let person = await Person.findAll();

            res.send(person);
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        let id = req.query.id;
        try {
            let person = await Person.findAll({
                where: {
                    id: req.query.id
                }
            });

            res.send(person);
        } catch (error) {
            next(error);
        }
    }
}

export default new PersonHandler();
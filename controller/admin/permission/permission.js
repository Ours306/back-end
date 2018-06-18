import Permission from '../../../model/admin/permission';

class PermissionHandler {
    constructor() {

    }

    async save(req, res, next) {
        let permission = Permission.build({
            ...req.body
        });
        try {
            permission = await permission.save();
        } catch (error) {
            next(error);
        }
    }
}

export default new PermissionHandler();
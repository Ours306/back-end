import express from 'express'
import PersonHandler from '../../controller/business/person/person'

const router = express.Router();

router.post('/save', PersonHandler.save);
router.post('/delete', PersonHandler.delete);
router.post('/edit', PersonHandler.edit);
router.get('/findById', PersonHandler.findById);
router.get('/findAll', PersonHandler.findAll);

export default router;
import express from 'express'
import ModuleHandler from '../controller/module/module'

const router = express.Router()

/**
 * @swagger
 * definitions:
 *   Module:
 *     properties:
 *       name:
 *         type: string
 *       age:
 *         type: integer
 *       idCard:
 *         type: string
 *       birth:
 *         type: string
 *         format: date-time
 */

router.get('/findAll', ModuleHandler.findAll)
router.post('/save', ModuleHandler.save)

export default router

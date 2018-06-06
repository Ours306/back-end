import express from 'express'
import UserController from '../../controller/admin/user/user'

const router = express.Router()

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       tel:
 *         type: string
 *       address:
 *         type: string
 *       worknum:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       birth:
 *         type: string
 *         format: date-time
 */

/**
 * @swagger
 * /user/save:
 *   post:
 *      tage:
 *          - User
 *      description: 新增用户
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: user
 *            description: User Object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/User'
 *      responses:
 *          200:
 *              description: 新增成功
 *              schema:
 *              $ref: '#/definitions/User'
 */
router.post('/save', UserController.save)

/**
 * @swagger
 * /user/edit:
 *   post:
 *      tage:
 *          - User
 *      description: 编辑用户
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: user
 *            description: User Object
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/User'
 *      responses:
 *          200:
 *              description: 编辑成功
 *              schema:
 *              $ref: '#/definitions/User'
 */
router.post('/edit', UserController.edit)

/**
  * @swagger
  * /user/findAll:
  *   get:
  *     tage:
  *       - User
  *     description: 查找所有用户
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: 查找成功
  *         schema:
  *           $ref: '#/definitions/User'
  */
router.get('/findAll', UserController.findAll)

export default router

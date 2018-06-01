import express from 'express'
import StudentHandler from '../controller/student/student'

const router = express.Router()

/**
 * @swagger
 * definitions:
 *   Student:
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

 /**
  * @swagger
  * /student/save:
  *   post:
  *     tage:
  *       - Student
  *     description: 新增学生
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: student
  *         description: Student object
  *         in: body
  *         required: true
  *         schema: 
  *           $ref: '#/definitions/Student'
  *     responses:
  *       200:
  *         description: 新增成功
  *         schema:
  *           $ref: '#/definitions/Student'
  */
router.post('/save', StudentHandler.save)

 /**
  * @swagger
  * /student/findById:
  *   get:
  *     tage:
  *       - Student
  *     description: 通过id查找学生
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: id
  *         in: query
  *         description: 学生id
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: 查找成功
  *         schema:
  *           $ref: '#/definitions/Student'
  */
router.get('/findById', StudentHandler.findById)

export default router

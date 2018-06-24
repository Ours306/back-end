/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50551
Source Host           : localhost:3306
Source Database       : node

Target Server Type    : MYSQL
Target Server Version : 50551
File Encoding         : 65001

Date: 2018-06-24 21:25:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for module
-- ----------------------------
DROP TABLE IF EXISTS `module`;
CREATE TABLE `module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `router` varchar(255) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `hasChild` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of module
-- ----------------------------
INSERT INTO `module` VALUES ('1', '顶级模块', null, null, null, null, '1');
INSERT INTO `module` VALUES ('2', '信息管理', null, '1', null, null, '1');
INSERT INTO `module` VALUES ('3', '动态表单', null, '1', null, null, '1');
INSERT INTO `module` VALUES ('4', '学生管理', '/student/studentList', '2', null, null, '0');
INSERT INTO `module` VALUES ('5', '表单管理', '/formDesign/Addform', '3', null, null, '0');
INSERT INTO `module` VALUES ('6', '教师管理', '/teacher/teacherList', '2', null, null, '0');
INSERT INTO `module` VALUES ('7', '开发管理', null, '1', null, null, '1');
INSERT INTO `module` VALUES ('8', '角色管理', '/role/roleList', '7', null, null, '0');
INSERT INTO `module` VALUES ('9', '用户管理', '/user/userList', '7', null, null, '0');

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `module_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES ('1', '新增学生', '/student/save', '4', null, null);
INSERT INTO `permission` VALUES ('2', '编辑学生', '/student/edit', '4', null, null);
INSERT INTO `permission` VALUES ('3', '删除学生', '/student/delete', '4', null, null);
INSERT INTO `permission` VALUES ('4', '查看学生', null, '4', null, null);
INSERT INTO `permission` VALUES ('5', '新增教师', null, '6', null, null);
INSERT INTO `permission` VALUES ('6', '修改教师', null, '6', null, null);
INSERT INTO `permission` VALUES ('7', '删除教师', null, '6', null, null);
INSERT INTO `permission` VALUES ('8', '查看教师', null, '6', null, null);
INSERT INTO `permission` VALUES ('9', '动态表单操作', null, '5', null, null);

-- ----------------------------
-- Table structure for permission_role
-- ----------------------------
DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `permission_id` int(11) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permission_role
-- ----------------------------
INSERT INTO `permission_role` VALUES ('1', '1', '9', null, null);
INSERT INTO `permission_role` VALUES ('2', '1', '1', null, null);
INSERT INTO `permission_role` VALUES ('3', '1', '2', null, null);
INSERT INTO `permission_role` VALUES ('4', '1', '3', null, null);
INSERT INTO `permission_role` VALUES ('5', '1', '4', null, null);
INSERT INTO `permission_role` VALUES ('6', '1', '5', null, null);
INSERT INTO `permission_role` VALUES ('7', '1', '6', null, null);
INSERT INTO `permission_role` VALUES ('8', '1', '7', null, null);
INSERT INTO `permission_role` VALUES ('9', '1', '8', null, null);
INSERT INTO `permission_role` VALUES ('10', '3', '1', null, null);
INSERT INTO `permission_role` VALUES ('11', '3', '2', null, null);
INSERT INTO `permission_role` VALUES ('12', '3', '3', null, null);
INSERT INTO `permission_role` VALUES ('13', '3', '4', null, null);
INSERT INTO `permission_role` VALUES ('14', '2', '5', null, null);
INSERT INTO `permission_role` VALUES ('15', '2', '6', null, null);
INSERT INTO `permission_role` VALUES ('16', '2', '7', null, null);
INSERT INTO `permission_role` VALUES ('17', '2', '8', null, null);

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT 'jack',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `true` (`id`),
  UNIQUE KEY `false` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('2', 'test', '2018-06-21 09:15:31', '2018-06-21 09:16:18');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', null, null);
INSERT INTO `role` VALUES ('2', '教务处职工', null, null);
INSERT INTO `role` VALUES ('3', '学生处职工', null, null);

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `birth` datetime DEFAULT NULL,
  `idcard` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('jack1', '21', '1997-03-05 00:00:00', '123', '2', null, null);
INSERT INTO `student` VALUES ('jack3', '21', '1997-03-05 00:00:00', '123', '3', null, null);
INSERT INTO `student` VALUES ('jack3', '21', '1997-03-05 00:00:00', '123', '4', '2018-06-03 07:07:01', '2018-06-03 07:07:01');
INSERT INTO `student` VALUES ('jack3', '21', '1997-03-05 00:00:00', '123', '5', '2018-06-03 07:07:28', '2018-06-03 07:07:28');
INSERT INTO `student` VALUES ('jack3', '21', '1997-03-05 00:00:00', '123', '6', '2018-06-03 07:08:09', '2018-06-03 07:08:09');
INSERT INTO `student` VALUES ('jack3', '21', '1997-03-05 00:00:00', '123', '7', '2018-06-03 07:11:28', '2018-06-03 07:11:28');
INSERT INTO `student` VALUES ('测试', '123', '2018-06-06 16:00:00', null, '8', '2018-06-04 13:42:41', '2018-06-04 13:42:41');
INSERT INTO `student` VALUES ('测试', '123', '2018-06-06 16:00:00', null, '9', '2018-06-04 13:45:39', '2018-06-04 13:45:39');
INSERT INTO `student` VALUES ('测试', '123', '2018-06-06 16:00:00', null, '10', '2018-06-04 13:46:05', '2018-06-04 13:46:05');
INSERT INTO `student` VALUES ('测试111', '123', '2018-06-06 16:00:00', '13213', '11', '2018-06-04 14:10:31', '2018-06-04 14:10:31');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `birth` datetime DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `worknum` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '1997-03-05 00:00:00', '18286328176', 'China', '2018060601', '1287075856@qq.com', 'test', '2018-06-06 10:56:14', '2018-06-06 11:52:41');
INSERT INTO `user` VALUES ('2', '学生处老师', null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('3', '教务处老师', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '1', '1', null, null);
INSERT INTO `user_role` VALUES ('2', '2', '3', null, null);
INSERT INTO `user_role` VALUES ('3', '3', '2', null, null);

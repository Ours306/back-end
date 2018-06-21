const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

let arg = process.argv.splice(2);

/**
 * 生成model代码
 */
function generateModle(entity, self_path) {
    fs.readFile(path.resolve(__dirname, '../core/template/modelTeplate.ejs'), (err, data) => {
        let content = "" + data;
        let result = ejs.render(content,entity)
        let render_result = new Buffer(result);
        writeToFile(render_result, path.resolve(__dirname, '../model/business/' + self_path.toLowerCase() + '.js'));
    })
}

/**
 * 生成controller代码
 */
function generateController(entityName, self_path) {
    fs.readFile(path.resolve(__dirname, '../core/template/controllerTemplate.ejs'), (err, data) => {
        let content = "" + data;
        let result = ejs.render(content, {entity: entityName})
        let render_result = new Buffer(result);
        fs.mkdir('./controller/business/' + self_path.toLowerCase(),(err) => {
            console.error(err);
        })
        writeToFile(render_result, path.resolve(__dirname, '../controller/business/' + self_path.toLowerCase() + '/' + self_path.toLowerCase() + '.js'));
    })
}

/**
 * 生成route代码
 */
function generateRoute(entityName, self_path) {
    fs.readFile(path.resolve(__dirname, '../core/template/routeTemplate.ejs'), (err, data) => {
        let content = "" + data;
        let result = ejs.render(content, {
            entity: entityName
        })
        let render_result = new Buffer(result);
        writeToFile(render_result, path.resolve(__dirname, '../routes/business/' + self_path.toLowerCase() + '.js'));
    })
}

function writeToFile(data, self_path) {
    fs.writeFile(self_path, data, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log('生成成功!')
        }
    })
}

module.exports = {generateModle, generateController, generateRoute}

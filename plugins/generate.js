const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

let arg = process.argv.splice(2);

/**
 * 生成model代码
 */
function generateModle() {
    fs.readFile(path.resolve(__dirname, '../core/template/modelTeplate.ejs'), (err, data) => {
        let content = "" + data;
        let result = ejs.render(content,
            {
                entityName: '测试',
                entity: 'Test',
                tableName: 'test',
                fileds: [{
                    name: 'id',
                    type: 'INTEGER',
                    isPrimaryKey: 'true'
                }, {
                    name: 'name',
                    type: 'STRING'
                }]
            })
        console.log(result);
    })
}

/**
 * 生成controller代码
 */
function generateController() {
    fs.readFile(path.resolve(__dirname, '../core/template/controllerTemplate.ejs'), (err, data) => {
        let content = "" + data;
        let result = ejs.render(content, {
            entity: 'Test'
        })

        console.log(result);
    })
}

/**
 * 生成route代码
 */
fs.readFile(path.resolve(__dirname, '../core/template/routeTemplate.ejs'), (err, data) => {
    let content = "" + data;
    let result = ejs.render(content, {
        entity: 'Test'
    })
    console.log(result);
})
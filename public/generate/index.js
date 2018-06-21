$('#unique1').editableSelect({
    effects: 'slide'
})

$(".selectpicker").selectpicker({
    noneSelectedText: '请选择',//默认显示内容  
    size: 5
});

var count = 1;
function remove(event) {
    if(count < 2) {
        alert("只剩一行,不能删除!")
        return;
    }
    let dom = event.target.parentElement.parentElement.parentElement;
    let tr;
    if(dom.tagName.toLowerCase() === 'td') {
        tr = dom.parentElement;
    }
    else {
        tr = dom;
    }
    tr.parentNode.removeChild(tr);
    count--;
}

function add() {
    count++;
    let dom = `<tr>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                    <td>
                        <select name="isUnique" id="unique`+ count + `" class="form-control">
                            <option value=""></option>
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </td>
                    <td>
                        <select name="isPrimary" id="primary`+ count + `" class="form-control">
                            <option value=""></option>
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </td>
                    <td>
                        <select name="isAutoIncrement" class="form-control" id="autoIncrement">
                            <option value=""></option>
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </td>
                    <td>
                        <select name="isNull" class="form-control" id="setNull">
                            <option value=""></option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </td>
                    <td>
                        <div>
                            <button type="button" class="btn btn-info" onclick="remove(event)">
                                <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                            </button>
                            <button type="button" class="btn btn-info" onclick="add()">
                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            </button>
                        </div>
                    </td>
                </tr>`;
   
    $("#table").append(dom);

    $('#unique' + count).editableSelect({
        effects: 'slide'
    })
}

function sendForm() {
    let table = $("table tr");
    let fields = [];
    let headers = ['name', 'db_name', 'type', 'ch_name', 'default', 'isUnique', 'isPrimaryKey', 'isAutoIncrease', 'isNull']
    for(let i = 1; i < table.length; i++) {
        let obj = {};
        
        $(table[i]).find('td').each(function (index) {
            if(index < 9) {
                var key = headers[index];
                let value = $(this)[0].children[0].value;
                if (index > 5) {//下拉框
                    if(i===1) {
                        value = $(this)[0].children[0].children[2].value
                    }
                    else {
                        value = $(this)[0].children[0].value;
                    }
                    
                    if(!!!value || value === "false") {
                        value = undefined;
                    }
                }
                else {
                    value = $(this)[0].children[0].value;
                    if(index === 2) {
                        value = value.toUpperCase();
                    }
                }

                if (!!value) {
                    obj[key] = value;
                }
            }
        })
        fields.push(obj);
    }
    // entity.fields = fields;
    // let entity = {
    //     entityName: $("#entityName").val(),
    //     entity_ch_name: $("#entity_ch_name").val(),
    //     path: $("#path").val()
    // }
    // entity = JSON.stringify(entity);
    $.ajax({
        type: 'POST',
        url: '/module/generate',
        contentType: 'application/json',
        data: JSON.stringify({
            "entityName": $("#entityName").val(),
            "entity_ch_name": $("#entity_ch_name").val(),
            "path": $("#path").val(),
            "fields": fields
        }),
        success: success
    })
}

function success(data, error) {
    console.log(data+error);
}
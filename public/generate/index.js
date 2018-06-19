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
                        <select name="isUnique" id="unique`+ count + `" class="form-control">
                            <option value=""></option>
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" class="form-control">
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
    let headers = ['name', 'db_name', 'type', 'ch_name', 'isPrimaryKey', 'isAutoIncrease', 'isNull', 'isUnique', 'default']
    for(let i = 1; i < table.length; i++) {
        let obj = {};

        $(table[i]).find('td').each(function (index) {
            var key = headers[index];
            let value = $(this)[0].children[0].value;
            
            if(!!value) {
                obj[key] = value;
            }
        })
        fields.push(obj);
    }
        
    $.ajax({
        type: 'POST',
        url: '/generate',
        data: 123,
        success: success
    })
}

function success(data, error) {
    console.log(data+error);
}
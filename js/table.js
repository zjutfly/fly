$('#mytab').bootstrapTable({
    url: "js/tableconfig.json",
    queryParams: "queryParams",
    toolbar: "#toolbar",
    sidePagination: "true",
    striped: true, // 是否显示行间隔色
    search : "true",
    uniqueId: "ID",
    pageSize: "8",
    pagination: true, // 是否分页
    // pageList: [5, 8, 11, 14],        //可供选择的每页的行数（*）
    sortable: true, // 是否启用排序
    cardView: false,                    //是否显示详细视图
    showColumns: true,                  //是否显示所有的列
    showRefresh: true,                  //是否显示刷新按钮
        columns: [{
            field: 'id',
            title: '编号'
        },
        {
            field: 'time',
            title: '时间'
        },
        {
            field: 'content',
            title: '信件内容'
        },
        {
            field: 'price',
            title: '操作',
            width: 120,
            align: 'center',
            valign: 'middle',
            formatter: actionFormatter,
        },

    ]
});
//操作栏的格式化
function actionFormatter(value, row, index) {
    var id = value;
    var result = "";
    result += "<a href='javascript:;' class='btn btn-xs btn-info' onclick=\"EditViewById('" + id + "', view='view')\" title='查看详情'><span class='glyphicon glyphicon-search'></span></a>&nbsp;";
    result += "<a href='javascript:;' class='btn btn-xs btn-warning' onclick=\"EditViewById('" + id + "')\" title='接收'><span class='glyphicon glyphicon-pencil'></span></a>&nbsp;";
    result += "<a href='javascript:;' class='btn btn-xs btn-danger' onclick=\"DeleteByIds('" + id + "')\" title='退回'><span class='glyphicon glyphicon-remove'></span></a>";
    return result;
}

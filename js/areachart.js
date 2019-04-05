// area
var data1;
$(document).ready(function(){
    $.get("URL",function(datas, error, code){
        if (code == 200)  alert("数据: " + datas + "\n状态: " + error);
        else if (code == 201)  alert(error);
        data1 = datas;
    })

    var areachart = echarts.init(document.getElementById('area'));

    var option = {
        title : {
            text: '投诉量的地区/部门分布',
            subtext: '来自www'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['蒸发量','降水量']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: true},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        yAxis : [
            {
                type : 'category',
                // data : ['上城区','下城区','拱墅区','西湖区','江干区','滨江区','余杭区','萧山区','富阳区','建德市','临安区', '经济技术开发区','大江东区','桐庐县']
                data : ['卫生和计划生育局','人力资源和社会保障局','','西湖区','江干区','滨江区','余杭区','萧山区','富阳区','建德市','临安区', '经济技术开发区','大江东区','桐庐县']
            }
        ],
        xAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'1月',
                type:'bar',
                data:[66, 33, 22, 44, 8, 33, 14, 32, 6],
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    areachart.setOption(option);
});

// amount
function showamount() {
    var data1;
    $.get("URL",function(data, status) {
        alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data);
        data1 = result.data;
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('amount'));
// 指定图表的配置项和数据
        var option = {
            title: {
                text: '投诉总量趋势图',
                subtext: '数据来自fly'
            },
            tooltip: {},
            legend: {
                data:['数量']
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
            xAxis: {
                data: data1.times,
                // data: ["2019.4.1","2019.4.2","2019.4.3","2019.4.4","2019.4.5","2019.4.6","2019.4.7"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'line',
                data: data1.amount,
                // data: [5, 20, 36, 10, 10, 20, 3],
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
}

//截图用
$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('amount'));
// 指定图表的配置项和数据
    var option = {
        title: {
            text: '投诉总量趋势图',
            subtext: '数据来自fly'
        },
        tooltip: {},
        legend: {
            data:['数量']
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
        xAxis: {
            // data: data1.times,
            data: ["2019.4.1","2019.4.2","2019.4.3","2019.4.4","2019.4.5","2019.4.6","2019.4.7"]
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'line',
            // data: data1.amount,
            data: [5, 20, 36, 10, 10, 20, 3],
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

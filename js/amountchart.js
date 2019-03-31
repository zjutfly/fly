// amount
// getdata
$(document).ready(function(){
    $.get("URL",function(datas, error, code){
        if (code == 200)  alert("数据: " + datas + "\n状态: " + error);
        else if (code == 201)  alert(error);
        var data1 = datas;
    })
});

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('amount'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '投诉总量趋势图'
    },
    tooltip: {},
    legend: {
        data:['数量']
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
        data: [5, 20, 36, 10, 10, 20, 3]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


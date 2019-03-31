// area
var areachart = echarts.init(document.getElementById('area'));
var option = {
    title: {
        text: '信件部门分布图'
    },
    tooltip: {},
    legend: {
        data:['数量']
    },
    xAxis: {
        data: ["民政局","派出所","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
areachart.setOption(option);

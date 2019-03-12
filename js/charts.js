// amount

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('amount'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '信件总量趋势图'
    },
    tooltip: {},
    legend: {
        data:['数量']
    },
    xAxis: {
        data: ["2018.9","2018.10","2018.11","2018.12","2019.1","2019.2"]
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// depart
var departchart = echarts.init(document.getElementById('depart'));
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
departchart.setOption(option);

// from
function showfrom() {
    var data3
    $.get("URL", function(data, status){
        alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data);
        data3 = result.data;
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('from'));
// 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: data3.types,
                // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: data3.datas,
                    // data:[
                    //     {value:335, name:'直接访问'},
                    //     {value:310, name:'邮件营销'},
                    //     {value:234, name:'联盟广告'},
                    //     {value:135, name:'视频广告'},
                    //     {value:1548, name:'搜索引擎'}
                    // ]
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })
    app.title = '环形图';
}
//……截图用
$(document).ready(function(){
//     app.title = '环形图';
// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('from'));
// 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['网上大厅','手机APP','政务服务网','微信','国家信访局']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:1305, name:'网上大厅'},
                    {value:1034, name:'手机APP'},
                    {value:278, name:'政务服务网'},
                    {value:36, name:'微信'},
                    {value:18, name:'国家信访局'}
                ]
            }
        ]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

// depart

function showdepart( ) {
    var data2;
    $.get("/depart_add/", function(data, status){
        alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data);
        data2 = result.data;

        var departchart = echarts.init(document.getElementById('depart'));

        var option = {
            title: {
                text: '投诉量部门分布图',
                subtext: '数据来自fly'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
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
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                // data: data2.departs
                data: ["计划生育局","阿萨德局","啊投影仪局","计算机局","快乐水是是局","拉我玩局"]
            },
            series: [
                {
                    name: '2012年',
                    type: 'bar',
                    // data: data2.amount
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        departchart.setOption(option);
    })
}
//截图用。
$(document).ready(function(){
    var departchart = echarts.init(document.getElementById('depart'));

    var option = {
        title: {
            text: '投诉量部门分布图',
            subtext: '数据来自fly'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
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
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            // data: data2.departs
            data: ["余杭区住建局","余杭区公安分局","江干区公安分局","上城区人力社保局","城乡建设委员会","开发区交警大队"]
        },
        series: [
            {
                name: '数量',
                type: 'bar',
                // data: data2.amount
                data: [89, 63, 43, 32, 32, 28]
            }
        ]
    };
    departchart.setOption(option);
});

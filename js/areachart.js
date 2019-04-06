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
        title: {
            text: '投诉量地区分布图',
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
            // data: data1.areas
            data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
        },
        series: [
            {
                name: '2012年',
                type: 'bar',
                // data: data1.amount
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };

    areachart.setOption(option);
});

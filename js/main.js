// function getdata() {
//     $.get("list_add/", function(data, status){
//         alert("数据: " + data + "\n状态: " + status);
//     });
// }
$(document).ready(function(){
    // init table

    // $("#mainlist").show();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
});
$("#kkk").click(function(){
    $("#flyfly").hide();
    // document.write(123);
});

//header背景色调变化
//3.31 移除了header 换成了sidebar
// $(".flyheader").mouseenter(function(){
//     $("#flyheader").css("background","#000000");
// });
// $(".flyheader").mouseleave(function(){
//     $("#flyheader").css("background","#1E1D22");
// });

$("#listbutton").click(function(){
    $("#mainlist").show();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("投诉线索智能筛查系统");

});
$("#amountbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").show();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("最近一周的投诉量趋势图");
    showamount();
});
$("#departbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").show();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("投诉量部门分布图");
    showdepart();
});
$("#areabutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").show();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("投诉量按地区分布图");
    showarea();
});
$("#typebutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").show();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("投诉量按类别分布图");
    showtype();
});

$("#areaefficbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#areaeffic").show();
    $("#departeffic").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $(".page-header").text("各 地区 平均办理时效");
    showareaeffic();
});
$("#departefficbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#areaeffic").hide();
    $("#departeffic").show();
    $("#from").hide();
    $("#hotspot").hide();
    $(".page-header").text("各 部门 平均办理时效");
    showdeparteffic();
});

$("#frombutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").show();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("数据来源排行图");
    showfrom();
});
$("#hotspotbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").show();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("用户热词分析图");
});


$("#mainbutton").click(function () {
    $(location).attr("href", "bigscreen2/index.html");
})

function remarks(value, row, index) {
    if (value.length > 20) {
        $("#message-text").val(value);
        return "<button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#exampleModal\">详情</button>";
    } else {
        return "<div style=\"font-family:'微软雅黑'\">" + value + "</div>";
    }
}
$("#1-reply").click(function () {
    alert("成功！");
})

$("#reply").click(function () {
    alert("成功！");
})

$("#sendback1").click(function () {
    $("#line1").remove();
})

$("#sendback2").click(function () {
    $("#line2").remove();
})

$("#sendback3").click(function () {
    $("#line3").remove();
})

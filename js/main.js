$(document).ready(function(){
    $("#amount").show();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#emotion").hide();
    $("#hotspot").hide();

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

    $("#amountbutton").click(function(){
        $("#amount").show();
        $("#depart").hide();
        $("#area").hide();
        $("#type").hide();
        $("#emotion").hide();
        $("#hotspot").hide();
        // document.write(123);
        $(".page-header").text("最近一周的投诉量趋势图");
    });
    // $("#departbutton").click(function(){
    //     $("#amount").hide();
    //     $("#depart").show();
    //     $("#area").hide();
    //     $("#type").hide();
    //     $("#emotion").hide();
    //     $("#hotspot").hide();
    //     // document.write(123);
    // });
    $("#areabutton").click(function(){
        $("#amount").hide();
        $("#depart").hide();
        $("#area").show();
        $("#type").hide();
        $("#emotion").hide();
        $("#hotspot").hide();
        // document.write(123);
        $(".page-header").text("投诉量按地区分布图");
    });
    $("#typebutton").click(function(){
        $("#amount").hide();
        $("#depart").hide();
        $("#area").hide();
        $("#type").show();
        $("#emotion").hide();
        $("#hotspot").hide();
        // document.write(123);
        $(".page-header").text("投诉量按地区分布图");
    });
    $("#emotionbutton").click(function(){
        $("#amount").hide();
        $("#depart").hide();
        $("#area").hide();
        $("#type").hide();
        $("#emotion").show();
        $("#hotspot").hide();
        // document.write(123);
        $(".page-header").text("投诉量按地区分布图");
    });
    $("#hotspotbutton").click(function(){
        $("#amount").hide();
        $("#depart").hide();
        $("#area").hide();
        $("#type").hide();
        $("#emotion").hide();
        $("#hotspot").show();
        // document.write(123);
        $(".page-header").text("投诉量按地区分布图");
    });



});

// jquery test
// $(function () {
//     var j;
//     document.write(j);
//     }
// );


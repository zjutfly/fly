$(document).ready(function(){
    $("#kkk").click(function(){
        $("#flyfly").hide();
        // document.write(123);
    });
    //header背景色调变化
    $(".flyheader").mouseenter(function(){
        $("#flyheader").css("background","#000000");
    });
    $(".flyheader").mouseleave(function(){
        $("#flyheader").css("background","#1E1D22");
    });
    //sidebar
    var $mainSidebar = $( "#sidebar-main" );
    $mainSidebar.simplerSidebar( {
        attr: "sidebar-main",
        selectors: {
            trigger: "#sidebar-main-trigger",
            quitter: ".quitter"
        },
        animation: {
            easing: "easeOutQuint"
        }
    } );

});


// $(function () {
//     var j;
//     document.write(j);
//     }
// );


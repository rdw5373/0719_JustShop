// eslint-disable

$(function(){

    // GNB 메뉴 시작
    $(".mainLi").mouseover(function(){
        $(".subMenu").stop().slideDown(800);
    });

    $(".mainLi").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
    });
    // GNB 메뉴 끝


    // 슬라이드쇼 시작
    setInterval(fnSlide, 3000);

    function fnSlide() {
        
        $("#shuttleFrame").animate(
            {"margin-top": "-300px"}, 
            1000, 
            function(){
                $("#slide a:first-child")
                        .insertAfter("#slide a:last-child");
                $("#shuttleFrame").css({"margin-top": "0"});
            });

    }
    // 슬라이드쇼 끝

});

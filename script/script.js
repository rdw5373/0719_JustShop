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


    // 멀티탭 시작

        //탭버튼,탭콘텐츠 시작
    $("#bbs button").click(function(){
        $("#bbs button").removeClass("selected");
        $(this).addClass("selected");

        var dataLink =$(this).attr("data-link");
        $("#bbs .tabContents").css({"display": "none"});
        $("#" + dataLink).css({"display": "block"});
    });
        //탭버튼,탭콘텐츠 시작

    // 멀티탭 끝


    // 레이어팝업 시작
    $("tr#popupPoint").click(function(){
        $("div#layerBG").css({"display": "block"});
    });
            // 레이어팝업 나타나기

    $("div#closeBtnArea>button").click(function(){
        $("div#layerBG").css({"display": "none"});
    });
            // 레이어팝업 닫기
    // 레이어팝업 끝

});

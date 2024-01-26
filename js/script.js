$(function(){
    //메뉴 방법1
    // $(".main > li").hover(function(){
    //     $(this).find(".sub").stop().slideDown();
    // }, function(){
    //     $(".sub").stop().slideUp()
    // })//hover

    //메뉴 방법2
    $(".main > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    })//mouseover
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })//mouseout

    //슬라이드방법 1
    // $(".move li").eq(0).siblings().hide();
    // var n = 0;
    // setInterval(function(){
    //     $(".move li").eq(n).fadeOut();
    //         n = (n + 1) % 3;
    //     $(".move li").eq(n).fadeIn();
    // },2000)//setInterval
    
    // //슬라이드 방법 2
    $(".move li").eq(0).siblings().hide();
    var n = 0;
    setInterval(function(){
        n = (n + 1) % 3;
        $(".move li").eq(n).siblings().fadeOut();
        $(".move li").eq(n).fadeIn();
    },2000)//setInterval

    //팝업
    $(".p_click").click(function(){
        $(".pop_bg, .pop").fadeIn()
    })
    $(".close").click(function(){
        $(".pop_bg, .pop").fadeOut()
    })


    
})//jquery
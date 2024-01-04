$(function(){

    // $(".main > li, .sub_bg").hover(function(){
    //     $(".sub , .sub_bg").stop().slideDown();
    // }, function(){
    //     $(".sub , .sub_bg").stop().slideUp();
    // })

    $(".main > li, .sub_bg").mouseover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    })

    $(".main > li, .sub_bg").mouseout(function(){
        $(".sub , .sub_bg").stop().slideUp();
    })

    //이미지 슬라이드

    // $(".move li").hide()
    // $(".move li").eq(0).show()

    // $(".move li").eq(0).show()
    // $(".move li").eq(1).hide()
    // $(".move li").eq(2).hide()

    // $(".move li").eq(0).siblings().hide()

    // $(".move li:gt(0)").hide();

    // var n = 0; //0  1  2  현재 보이는 그림 인덱스 번호

    // setInterval(  move , 2000);

    // function move(){

    //     console.log("N1 : ", n); 
    //     $(".move li").eq(n).fadeOut();

    //     if( n < 2 ){
    //         n++;
    //     }else {
    //         n=0;
    //     }
    // console.log("N : ", n); 

    // $(".move li").eq(n).fadeIn();

    // }

    var current =0;

    setInterval(function(){
        if(current ==2){
            current = 0;
        }else {
            current++;
        }

        $(".move li").eq(current).siblings().fadeOut();
        $(".move li").eq(current).fadeIn();

    }, 3000)


    //pop

    $(".p_click").click(function(){
        $(".pop").fadeIn()
    })

    $(".close").click(function(){
        $(".pop").fadeOut()
    })

})
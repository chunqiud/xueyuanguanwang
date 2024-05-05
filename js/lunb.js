{/* <script type="text/javascript" src="jquery-3.4.1.min.js"></script> */}

$(function(){
    var index=0;//标记当前图片
    dingshiqi();
    function dingshiqi(){
        var f=setInterval(function(){
        if(index==$(".box-imgb").length-1){
            index=0;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
        }
        else{
            index++;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
        }
    },8000)
    }
    $(".box-leftb").click(function(){
        clearInterval(f);
        if(index==0){
            index=$(".box-imgb").length-1;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
            dingshiqi();
        }
        else{
            index--;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
            dingshiqi();
        }
        
    })
    $(".box-rightb").click(function(){
        if(index==$(".box-imgb").length-1){
            index=0;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
            dingshiqi();
        }
        else{
            index++;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
            dingshiqi();
        }
    })
    $(".bottonb").click(function(){
            var indexx =$(this).index();
            index=indexx;
            $(".box-imgb").css("opacity","0");
            $(".box-imgb").eq(index).css("opacity","1");
            $(".bottonb").css("background","#ccc")
            $(".bottonb").eq(index).css("background","#fff");
            dingshiqi();

        })
})

       
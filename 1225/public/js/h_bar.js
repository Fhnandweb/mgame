$(function(){
    $("#h_bar>ul>li").mouseenter(function(){
        $li=$(this);
        $li.children(0).next().css("display","block");
        $("#h_bar>ul>li>ul").mouseleave(function(){
            $ul=$(this);
            $ul.css("display","none")
        })
    })
    




})

// window.onscroll=function(){
//     var scrollTop=
//         document.body.scrollTop
//         ||document.documentElement.scrollTop;
//       if(scrollTop>100){
//         $("#h_bar").css({
//             "position":"fixed",
//             "transition":"all 1s linear"
//         })
//     }
// }
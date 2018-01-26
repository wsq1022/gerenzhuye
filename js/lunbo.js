/**
 * Created by lenovo on 2018/1/25.
 */
{
    let danping = document.querySelector(".zpp");
    let box=document.querySelector(".zuopin")
    let n=6
    let flag=true
    let dir="right"
    let st=setInterval(moveFu,2000)
    function moveFu(){
        if(dir==="right"){
            n++
        }else{
            n--
        }
        danping.style.marginLeft=-n*418+"px"
        danping.style.transition="all 1s"
    }
    danping.addEventListener("transitionend",function(){
        flag=true
        if(n===11){
            n=4
            danping.style.transition="none"
            danping.style.marginLeft="-964px"
        }
        if(n===0){
            n=7
            danping.style.transition="none"
            danping.style.marginLeft="-1687px"
        }
    })
    window.onblur=box.onmouseover=function(){
        clearInterval(st);
    }
    window.onfocus=box.onmouseout=function(){
        st=setInterval(moveFu,2000)
    }
}
var btn01 = document.querySelector(".btn1")
var btn02 = document.querySelector(".btn2")
var vw =document.querySelector(".view")

var flag =0


btn01.addEventListener("click",function(){
    if (flag ==0){
        btn01.innerHTML="Cancel"
        btn01.style.backgroundColor="green"
        flag = 1
    }
    else{
        btn01.innerHTML="Buy Now"
        btn01.style.backgroundColor="#26617D"
        flag=0
    }
})

btn02.addEventListener("click",function(){
    if(flag==0){
        btn02.innerHTML="Remove from card"
        btn02.style.backgroundColor="green"
        flag =1
    }
   else{
    btn02.innerHTML="Add to card"
        btn02.style.backgroundColor="#26617D"
        flag =0
   }
})



vw.addEventListener("click",function(){
    if (flag==0){
    vw.innerHTML= "VIEW LESS"
    vw.style.backgroundColor="green"
    flag =1
}
else{
    vw.innerHTML= "VIEW MORE"
    vw.style.backgroundColor="black"
    flag =0
}

})


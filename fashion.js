const navigation=document.querySelector(".small-Menu")
const Nav=document.querySelector(".large-Menu ")
const drawDown=document.querySelector(".DrawDownMenu")
const multiPicture=document.getElementById("collection")







const imageArray=[
    "./Images/shoe.jpg",
    "./Images/store.jpg",
   "./Images/wrist-watch.jpg",
]

let counter = 0
setInterval(()=>{
    if(
      counter < imageArray.length){
        multiPicture.style.background=`url(${imageArray[counter]}) no-repeat`
        multiPicture.style.backgroundSize= "cover"
        multiPicture.style.transition="All 2s"
        counter++
      }else{
        counter=0
      }

},3000)

drawDown.addEventListener("click",function(){
    if(!navigation.classList.contains("show")){
        navigation.classList.add("show")
    }else{
        navigation.classList.remove("show")
    }

    
}
)
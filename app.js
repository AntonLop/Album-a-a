const fullImgBox = document.getElementById("fullImgbox"),
      imgElement = document.getElementById("imgELement"),
      rightBtn= document.getElementById("rightBTN"),
      leftBtn= document.getElementById("leftBTN"),
      closeImg = document.getElementById("close"),
      listaImg = [...document.querySelectorAll(".img")];

let indexImf =0

listaImg.forEach((img,i)=>{
    img.addEventListener("click", (e) =>{
        clicked(i)
        fullImgBox.style.display="flex";
        imgElement.src= img.src
    })
})

function clicked(position){
    indexImf = position;
    imgElement.src= listaImg[indexImf].src
}
rightBtn.addEventListener("click", (e) =>{
    if (indexImf>=listaImg.length-1) {
        indexImf=-1
    }
    indexImf++;
    imgElement.src= listaImg[indexImf].src
})
leftBtn.addEventListener("click", (e) =>{
    if (indexImf<= 0) {
        indexImf=listaImg.length
    }
    indexImf--;
    imgElement.src= listaImg[indexImf].src
})

closeImg.addEventListener("click",e=>{fullImgBox.style.display="none";})

fullImgBox.addEventListener("click",e=>{
   if (e.target.classList.contains("fullImage")) {
    fullImgBox.style.display="none";
   
   }
})

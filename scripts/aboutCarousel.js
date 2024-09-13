const carousel = document.querySelector(".card-list");
firstImg = carousel.querySelectorAll(".card-link")[0]
arrowIcons = document.querySelectorAll(".container i");



let isDragStart = false , prevPageX , prevScrollLeft, positionDiff;
let firstImgWidth = firstImg.clientWidth + 20;


arrowIcons.forEach(icon => {
    icon.addEventListener("click" , function(){
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})



const dragStart = (e) => {
    isDragStart = true ;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
   
}

const dragging = (e)  =>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    

}
carousel.addEventListener("mouseover" , dragStart);
carousel.addEventListener("mousedown" , dragging);
carousel.addEventListener("mouseup" , dragStop);




carousel.forEach(carousel => {
    const carouselInner = carousel.querySelector(".card-list");
    const carouselContent = Array.from(carouselInner.children);
})

carouselContent.forEach(item =>{
    const duplicate = item.cloneNode(true)
    carouselInner.appendChild(duplicate);
    carouselInner.style.animation = "move 12s linear infinite"
})

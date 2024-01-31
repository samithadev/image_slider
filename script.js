const slider_container = document.querySelector(".slider-container")
var initialposition = 0
var pressedinside = false

slider_container.addEventListener("mousedown", function(e){
    this.style.cursor = "grabbing"
    initialposition = e.clientX;
    pressedinside = true
})

slider_container.addEventListener("mouseup", function(e){
    this.style.cursor = "grab"
    pressedinside = false
})

slider_container.addEventListener("mouseleave", function(e){
    pressedinside = false
})

slider_container.addEventListener("mousemove", function(e){
    if(!pressedinside){
        return;
    }
    this.scrollLeft += initialposition - e.clientX
})
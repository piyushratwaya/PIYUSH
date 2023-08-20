const slides = document.querySelectorAll(".sideshow")
var counter = 0;
//console.log(slides)

slides.forEach(
   
(sideshow,index) => {

    sideshow.style.left = `${index * 100}%`

}
)
const goprev =() => {
    counter--
    slider()
}


const gonext =() => {
    counter++
    slider()
}

const slider = () =>{
    slides.forEach(
        (sideshow) =>{
            sideshow.style.transform = `translatex(-${counter * 100}%)`
        }
    )
}

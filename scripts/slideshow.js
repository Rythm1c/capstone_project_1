let slide_index = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

show_slide(slide_index);

function next_slide(n) {
    slide_index += n;

    //restrict number of slides
    if (slide_index < 0) {
        slide_index = 9;
    }
    if (slide_index > (slides.length - 1)) {
        slide_index = 0;
    }
    show_slide();
}
function current_slide(n) {
    slide_index = n;
    show_slide();
}


function show_slide() {


    slides.forEach(slide => { slide.classList.add("hidden") });
    dots.forEach(dot => { dot.classList.remove("bg-black") });


    slides[slide_index].classList.remove("hidden");
    dots[slide_index].classList.add("bg-black");


}



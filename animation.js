const circle1 = document.querySelectorAll(".circle1");
const cricle2 = document.querySelectorAll(".circle2");


// Creating event listener for every circle1 class.

circle1.forEach(function(circle1){

    // .parentElement selects the td and th of table so you have more space to hover over for the cool effects.

    circle1.parentElement.addEventListener('mouseover',
    function(){

        // Adding animate class to add details on animation such as animationName and animationDuration

        circle1.classList.add("animate");
        circle1.parentElement.querySelector(".circle2").style.backgroundColor = "rgba(204, 61, 0,1)";
    })
    circle1.addEventListener('animationend', function(){
        circle1.classList.remove("animate");

        // Here the parentElement is quite useful as it helps to specifically chnage the color of the cirlce on which mouse has been hovered over.
        circle1.parentElement.querySelector(".circle2").style.backgroundColor = "white";
})
})
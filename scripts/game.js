let side = document.querySelector(".sideBar")
let openButton = document.querySelectorAll(".openButton")
let closeButton = document.querySelector(".closeButton")
let blackVoile = document.querySelector(".blackVoile")

/* ---------------------------------------------- /*
 * BUTTON
/* ---------------------------------------------- */

openButton.forEach(e => {
    e.addEventListener('click', function () {
        side.classList.remove("hidden")
        console.log("haha")
        blackVoile.classList.remove("hideblackVoile")
    })
})


// openButton.addEventListener("click", function () {
//     side.classList.remove("hidden")
//     console.log("haha")
// })

closeButton.addEventListener("click", function () {
    side.classList.add("hidden")
    blackVoile.classList.add("hideblackVoile")
})

// search bar animation
const searchEl = document.querySelector(".search")
const searchContainerEl =document.querySelector(".search-container")

searchEl.addEventListener("click",function(){
    searchContainerEl.classList.toggle("active")
})

// mobile menu.
const mobileMenuEl = document.querySelector(".open")

const navEl = document.querySelector(".nav")


mobileMenuEl.addEventListener("click",function(){    
    navEl.classList.toggle("active")
   
   
    

})
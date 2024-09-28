let burger = document.querySelector(".parent-header header .toggle");
let showLists = document.querySelector(".containerHeader nav");
let links = document.querySelectorAll(".containerHeader nav > a");
console.log(links)

burger.addEventListener("click",function(){
    showLists.classList.toggle("burger-menu");
    links.forEach(link => {
        if (link.style.display="none") link.style.display="block"
        else link.style.display="none"
    })
})
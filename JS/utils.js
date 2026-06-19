const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// this function is used for the navbar to hide when scroll down
const navbar = document.getElementById("navbar"); 
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        navbar.style.top = "-80px";
        if (window.innerWidth < 768) {
            nav.classList.remove("active");
        }

    } else if (event.deltaY < 0) {
        navbar.style.top = "0px";
        bar1.style.display = "block";
        bar2.style.transform = "rotate(0deg)";
        bar3.style.transform = "translateY(0px) rotate(0deg)";
        // console.log('Scrolling up');
    }
});

// to close Nav bar
const closeBtn = document.querySelector(".closeBtn");
closeBtn.onclick = ()=>{
    nav.style.display = "none";
}

// to maximize and minimize the experience section card's
const downAngle = document.querySelectorAll(".fa-angle-down");
downAngle.forEach(angle => {
    angle.addEventListener("click", () => {
        angle.closest(".card").classList.toggle("active");
    });
});
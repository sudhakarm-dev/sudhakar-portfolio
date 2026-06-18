const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

// To change the navlinks size by checking the screen size and changing the position to left
let x=0;
menu.onclick = ()=>{
    if(x === 0){
        nav.classList.toggle("active");
        bar1.style.display = "none";
        bar2.style.transform = "rotate(50deg)";
        bar3.style.transform = "translateY(-12px) rotate(310deg)";
        x=1;
    }
    else{
        nav.classList.toggle("active");
        bar1.style.display = "block";
        bar2.style.transform = "rotate(0deg)";
        bar3.style.transform = "translateY(0px) rotate(0deg)";
        x=0;
    }
}

// this function is used for moving the navbar or hide up and revel when scroll down
const navbar = document.getElementById("navbar"); 
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        navbar.style.top = "-80px";

    } else if (event.deltaY < 0) {
        navbar.style.top = "10px";
        // console.log('Scrolling up');
    }
});

// to show all career options 
const  dnArrow = document.getElementById("dnArrow");
const careerList = document.getElementById("careerList");

dnArrow.onclick = ()=>{
    careerList.classList.toggle("active");
}

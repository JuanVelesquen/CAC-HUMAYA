var x = window.matchMedia("(max-width: 576px)");
const navCollapse =  document.getElementById("navbarToggleExternalContent");
const navContent = document.querySelector(".navbar-content");
const navbarBrand = document.querySelector(".navbar-logo");
const navbar = document.querySelector(".nav-container");
const navbarBrandItem = document.querySelector(".navbar-brand-item");
const navbarBtn = document.querySelector(".navbar-btn");
const navbarImg = document.querySelector(".navbar-image");

if(x.matches){
    console.log(navCollapse);
    console.log(navContent);
    navCollapse.appendChild(navContent);
    navbar.appendChild(navbarBrand);
    navbar.classList.remove("justify-content-around");
}
else
{
    navbar.appendChild(navContent);
    navbarBrandItem.appendChild(navbarBrand);
    navbar.classList.add("justify-content-around");
}


x.onchange = (e) => {
    if (e.matches) {
        navCollapse.appendChild(navContent);
        navbar.appendChild(navbarBrand);
        navbar.classList.remove("justify-content-around");
    } else {
        navbar.appendChild(navContent);
        navbarBrandItem.appendChild(navbarBrand);
        navbar.classList.add("justify-content-around");
    }
};
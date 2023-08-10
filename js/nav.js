var x = window.matchMedia("(max-width: 576px)");
const navCollapse =  document.getElementById("navbarToggleExternalContent");
const navContent = document.querySelector(".navbar-content");
const navbarBrand = document.querySelector(".navbar-brand");
const navbar = document.querySelector(".nav-container");
const navbarBrandItem = document.querySelector(".navbar-brand-item");
const navbarBtn = document.querySelector(".navbar-btn");
const navbarImg = document.querySelector(".navbar-image");

if(x.matches){
    console.log(navCollapse);
    console.log(navContent);
    navCollapse.appendChild(navContent);
    navbar.appendChild(navbarBrand);
    navbarImg.src = "assets/imagenes/logo/logo-humaya-75x75.png";
    navbar.classList.remove("justify-content-around");
}
else
{
    navbar.appendChild(navContent);
    navbarBrandItem.appendChild(navbarBrand);
    navbar.classList.add("justify-content-around");
    navbarImg.src = "assets/imagenes/logo/logo-humaya-100x100.png";
}


x.onchange = (e) => {
    if (e.matches) {
        navCollapse.appendChild(navContent);
        navbar.appendChild(navbarBrand);
        navbar.classList.remove("justify-content-around");
        navbarImg.src = "assets/imagenes/logo/logo-humaya-75x75.png";
    } else {
        navbar.appendChild(navContent);
        navbarBrandItem.appendChild(navbarBrand);
        navbar.classList.add("justify-content-around");
        navbarImg.src = "assets/imagenes/logo/logo-humaya-100x100.png";
    }
};
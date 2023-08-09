var x = window.matchMedia("(max-width: 576px)");
const navCollapse =  document.getElementById("navbarToggleExternalContent");
const navContent = document.querySelector(".navbar-content");
const navbarBrand = document.querySelector(".navbar-brand");
const navbar = document.querySelector(".nav-container");
const navbarBrandItem = document.querySelector(".navbar-brand-item");

if(x.matches){
    console.log(navCollapse);
    console.log(navContent);
    navCollapse.appendChild(navContent);
    navbar.appendChild(navbarBrand);
    navbar.classList.remove("justify-content-around");
    console.log("This is a narrow screen — less than 576px wide.");
}
else
{
    navbar.appendChild(navContent);
    navbarBrandItem.appendChild(navbarBrand);
    navbar.classList.add("justify-content-around");
    console.log("This is a wide screen — more than 576px wide.");
}


x.onchange = (e) => {
    if (e.matches) {
        console.log(navCollapse);
        console.log(navContent);
        navCollapse.appendChild(navContent);
        navbar.appendChild(navbarBrand);
        navbar.classList.remove("justify-content-around");
        console.log("This is a narrow screen — less than 576px wide.");
    } else {
        navbar.appendChild(navContent);
        navbarBrandItem.appendChild(navbarBrand);
        navbar.classList.add("justify-content-around");
        console.log("This is a wide screen — more than 576px wide.");
    }
};
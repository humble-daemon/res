// css loading
import "./styles.css";
import { loadHomePage } from "./home";
import { loadAboutPage } from "./about";
import { loadMenuPage } from "./menu";



function startUp(){
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about");

    home.addEventListener("click", loadHomePage);
    menu.addEventListener("click", loadMenuPage);
    about.addEventListener("click", loadAboutPage);

    loadHomePage();
}

startUp();
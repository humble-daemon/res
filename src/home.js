function loadPage(){
    const content = document.getElementById("content");
    content.innerHTML  = "";

    const homeContent = document.createElement("div");
    homeContent.classList.add("home_content");

    const p = document.createElement("p");
    p.innerText = "Hi there! Not much to say, really. We're just the best restaurant in the world. Yep, the best. No big deal.";
    homeContent.appendChild(p);
    content.appendChild(homeContent);

    console.log("home page rendered");
}

export{loadPage as loadHomePage};
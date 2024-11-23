function loadPage(){
    const content = document.getElementById("content");
    content.innerHTML  = "";

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about_content");

    const lines = [
        "Welcome to Our Restaurant’s About Page!",
        "Honestly, we’d rather be eating than writing this. But here goes:",
        "",
        "We’re a team of culinary dreamers, sauce whisperers, and dessert magicians. Our mission? To make your taste buds do a happy dance.",
        "",
        "Founded in 1492, we’ve been serving food so good, it should come with a warning label. Whether it’s our legendary signature dish or the dessert that convinced your ex to take you back (you’re welcome), everything we do is with a pinch of passion and a dash of love.",
        "",
        "Oh, and if you were wondering, yes—we do know we’re the best. ",
        "",
        "Now stop reading and come eat. Seriously."
    ];

    lines.forEach( line => {
        const p = document.createElement("p");
        p.innerText = line;
        aboutContent.appendChild(p);
    });

    content.appendChild(aboutContent);
    console.log("about page rendered");
}

export{loadPage as loadAboutPage};
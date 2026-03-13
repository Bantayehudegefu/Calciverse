// Open developer contact popup
function openContact() {

    const contactBox = document.getElementById("contactBox");
    contactBox.style.display = "block";

}


// Close developer contact popup
function closeContact() {

    const contactBox = document.getElementById("contactBox");
    contactBox.style.display = "none";

}



// Close popup if user clicks outside it
window.onclick = function(event) {

    const contactBox = document.getElementById("contactBox");

    if (event.target === contactBox) {

        contactBox.style.display = "none";

    }

};



// Small hover sound effect for tool buttons (optional fun UI)
const tools = document.querySelectorAll(".tool-card");

tools.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "0.3s";

    });

});



// Simple entrance animation when page loads
window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});
const themeSelector = document.getElementById("theme");
const customColorInput = document.getElementById("customColor");
const body = document.body;

themeSelector.addEventListener("change", () => {
    const value = themeSelector.value;

    if (value === "dark") {
        body.style.background = "#0f172a";
        body.style.color = "white";
        customColorInput.style.display = "none";
    } else if (value === "light") {
        body.style.background = "#f5f5f5";
        body.style.color = "black";
        customColorInput.style.display = "none";
    } else if (value === "custom") {
        customColorInput.style.display = "inline-block";
        body.style.background = customColorInput.value;
        body.style.color = "white";
    }
});

// Update custom color live
customColorInput.addEventListener("input", () => {
    body.style.background = customColorInput.value;
});
// Optional: subtle floating animation for all tool buttons on page load
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".tool-card");
    cards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
            card.style.transition = "0.6s ease";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, i * 150);
    });
});
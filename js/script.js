const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        document.querySelectorAll(".nav a").forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

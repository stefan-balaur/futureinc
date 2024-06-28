
const mobileNav = document.querySelector('.mobile-nav')
const burger = document.querySelector('.burger img')
const close = document.querySelector('.close')
const mobileLinks = document.querySelectorAll(".mobile-li li");


burger.addEventListener("click", showNav)
close.addEventListener("click", closeNav)
mobileLinks.forEach((link) =>
    link.addEventListener("click", closeNav))

function showNav() {
    mobileNav.classList.add("show");
    navLogo.forEach((logo) => {
        logo.src = "assets/logo.png";
    })
}

function closeNav() {
    mobileNav.classList.remove("show");
    if (!scrolled && !navbar.classList.contains("dark")) {
        navLogo.forEach((logo) => {
            logo.src = "assets/logo-white.png";
        })
    }
}

const navbar = document.querySelector('nav');
const navLogo = document.querySelectorAll('.nav-logo')
let scrolled = false;
if (!navbar.classList.contains("dark")) {
    navLogo.forEach((logo) => {
        logo.src = "assets/logo-white.png";
    })
    burger.src = "assets/burger-right-white.svg";
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrolled = true;
        navbar.classList.add('scrolled');
        navLogo.forEach((logo) => {
            logo.src = "assets/logo.png";
        })
        burger.src = "assets/burger-right.svg";
    } else {
        scrolled = false;
        navbar.classList.remove('scrolled');
        if (!mobileNav.classList.contains("show") && !navbar.classList.contains("dark")) {
            navLogo.forEach((logo) => {
                logo.src = "assets/logo-white.png";
            })
            burger.src = "assets/burger-right-white.svg";
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const historyFigure = document.querySelector("#history figure");
    const statsContainer = document.querySelector(".experience-section .stats-container");

    if (historyFigure && statsContainer) {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === historyFigure) {
                    const figureWidth = entry.contentRect.width;
                    statsContainer.style.width = `${figureWidth}px`;
                }
            }
        });

        resizeObserver.observe(historyFigure);
        statsContainer.style.width = `${historyFigure.clientWidth}px`;
    }
});
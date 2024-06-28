import { CountUp } from './countUp.min.js';

let countUpElements = document.querySelectorAll('.animated-num');

function countNum(countUpElement) {
    let options = {
        duration: 4,
    };
    let countUp = new CountUp(countUpElement, parseInt(countUpElement.dataset.target), options);
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}

const revealElements = [
    ...document.querySelectorAll(".info-section img"),
    ...document.querySelectorAll(".info-section .text-info"),
    ...document.querySelectorAll(".cars-container .car.right picture"),
    ...document.querySelectorAll(".cars-container .car.left .image-left"),
    ...document.querySelectorAll(".cars-container .car .car-info")
];

function scrollAnim() {
    let windowHt = window.innerHeight;

    revealElements.forEach(elements => {
        let elementPos = elements.getBoundingClientRect().top;
        if (elementPos <= windowHt / 1.5) {
            elements.classList.add('revealed');
        }
    });

    countUpElements.forEach(elements => {
        let elementPos = elements.getBoundingClientRect().top;
        if (elementPos <= windowHt * 0.9 && !elements.classList.contains('counted')) {
            countNum(elements);
            elements.classList.add('counted');
        }
    });
}

document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener('scroll', scrollAnim);

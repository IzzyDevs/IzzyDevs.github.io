// const selectedMenu = () => {
//     document.getElementsByClassName('navigation').style.right = "-360"
// }

let selectionOne = document.getElementById("selectionOne");
let selectionTwo = document.getElementById("selectionTwo");
let selectionThree = document.getElementById("selectionThree");
let selectionFour = document.getElementById("selectionFour");
let menuState = document.getElementById("toggleMenu");

let selectionMade = () => menuState.checked = false;

selectionOne.addEventListener('click', selectionMade);
selectionTwo.addEventListener('click', selectionMade);
selectionThree.addEventListener('click', selectionMade);
selectionFour.addEventListener('click', selectionMade);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
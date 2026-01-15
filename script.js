function logowanie(){
    const log = document.getElementById('log').value;
    const haslo = document.getElementById('haslo').value;

    if(log === 'Adam' && haslo === 'Adam'){
        window.open('zalogowany.html')
    }
    else{
        alert('żle')
    }
}

const slides = document.querySelectorAll('.promka');
let index = 0

function view(n){
    slides.forEach(promka => promka.classList.remove('active'));
    slides[n].classList.add('active');
}
const left = document.getElementById('left')
const right = document.getElementById('right')
right.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    view(index)
});
left.addEventListener("click", ()=>{
    index = (index - 1 + slides.length) % slides.length;
    view(index)
} );

const burger = document.getElementById('lista');
const menu = document.getElementById('menu');

// burger.addEventListener("click", () => {
//     menu.classList.toggle('active');
// });
// document.addEventListener("click", (e) => {
//     if(!burger.contains(e.target)){
//         menu.classList.remove("active");
//     }
// });
// burger.addEventListener("touchstart", () => {
//     menu.classList.toggle('active');
// });
// document.addEventListener("touchstart", (e) => {
//     if(!burger.contains(e.target)){
//         menu.classList.remove("active");
//     }
// });
// menu.addEventListener("click", (e) => {
//     e.preventDefault();
// });
function togglemenu(e){
    e.stopPropagation();
    menu.classList.toggle('active');
}
burger.addEventListener('click', togglemenu);
burger.addEventListener('touchstart', togglemenu);

menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener('click', () =>{
    menu.classList.remove('active');
});
document.addEventListener('touchstart', () => {
    menu.classList.remove('active');
})

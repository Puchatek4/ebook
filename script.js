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

function togglemenu(e){
    e.stopPropagation();
    menu.classList.toggle('active_menu');
}
burger.addEventListener('click', togglemenu);
burger.addEventListener('touchstart', togglemenu);

menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

menu.addEventListener("touchstart", (e) => {
    e.stopPropagation();
});

document.addEventListener('click', () =>{
    menu.classList.remove('active_menu');
});
document.addEventListener('touchstart', () => {
    menu.classList.remove('active_menu');
})

const darkmode = document.getElementById("darkmode")
darkmode.addEventListener('click', () => {
    body.classList.remove('dark');
});

function create2(){
    const parentDiv = document.getElementById('rodzic');
    
    const newelement = document.createElement('div');
    newelement.setAttribute('class', 'archiwum');
    newelement.setAttribute('id', 'pomidor');
    parentDiv.appendChild(newelement);

    const newH1 = document.createElement('H1');
    newH1.setAttribute('class', 'archiwum');
    newH1.innerText = 'Ebook';
    newelement.appendChild(newH1);

    const newP = document.createElement('P');
    newP.setAttribute('class', 'podsumowanie');
    newP.innerText = 'nazwa: ' + '123';
    newelement.appendChild(newP);

    const newP2 = document.createElement('P');
    newP2.setAttribute('class', 'podsumowanie');
    newP2.innerText = 'data zakupu: ' + new Date();
    newelement.appendChild(newP2);

    const newP3 = document.createElement('P');
    newP3.setAttribute('class', 'podsumowanie');
    newP3.innerText = 'Kwota: ';
    newelement.appendChild(newP3);

    const newP4 = document.createElement('P');
    newP4.setAttribute('class', 'podsumowanie');
    newP4.innerText = 'Ilość: ';
    newelement.appendChild(newP4);

    const newP5 = document.createElement('P');
    newP5.setAttribute('class', 'podsumowanie');
    newP5.innerText = 'Dodatkowe informacje: ';
    newelement.appendChild(newP5);

    const newimg = document.createElement('img');
    newimg.setAttribute('src', 'planowanie.jpg');
    newelement.appendChild(newimg);
}
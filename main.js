let header = document.querySelector('header');

let house = document.getElementById('house');
let HOME = document.getElementById('HOME');

let shop = document.getElementById('shop');
let shopping = document.getElementById('shopping');

let information = document.getElementById('information');
let clipboard = document.getElementById('clipboard');


house.onclick = ()=>{
    HOME.style.display = 'inline-block';
    header.style.display = 'inline-block';
    shop.style.display = 'none';
    information.style.display = 'none';
    contact.style.display = 'inline-block';
}
shopping.onclick = ()=>{
    header.style.display = 'none';
    HOME.style.display = 'none';
    shop.style.display = 'inline-block';
    information.style.display = 'none';
    contact.style.display = 'inline-block';
}
clipboard.onclick = ()=>{
    header.style.display = 'none';
    HOME.style.display = 'none';
    shop.style.display = 'none';
    information.style.display = 'inline-block';
    let contact = document.getElementById('contact');
    contact.style.display = 'none';
    document.body.style.height='200vh'
}
let shop_now = document.getElementById('shop_now');
shop_now.addEventListener('click',()=>{
    header.style.display = 'none';
    HOME.style.display = 'none';
    shop.style.display = 'inline-block';
});
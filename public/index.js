const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');


hamburger.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
       menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }

})

// home.addEventListener('click', ()=>{
//      
// })
// home.addEventListener('click', ()=>{

//     if(contact.classList.contains('border-gray-300'))
//     document.getElementById("contact").style.borderColor = "gray"; 
// })
home.onClick
/// menu  /// 

const menu = document.querySelector('.menu'),
     showhidebtn = document.querySelector('.showhidebtn')

showhidebtn.addEventListener('click', () => {
     menu.classList.toggle('showmenu')
     
     menu.classList.contains('showmenu') 
     ? showhidebtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>' 
     : showhidebtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
})





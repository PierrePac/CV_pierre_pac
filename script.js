let windowWith = window.innerWidth;
let body = document.getElementById('body');
let heightHeader = document.getElementById('bandeau');
let profilPic = document.getElementById('profilPic');
let header = document.getElementById('header');
let perso = document.getElementById('perso');
let xp = document.getElementById('xp');
let logo = document.querySelectorAll('.logo');
let widthPerso = perso.clientWidth;
let widthProfilPic = profilPic.clientWidth;
let marginLeftProfilPic = (((widthPerso-widthProfilPic)/2)+'px');


if(windowWith<=768){
    profilPic.classList.add('my-3');
    profilPic.classList.remove('w-25');
    profilPic.classList.add('w-50');
    profilPic.style.left = ('50%');
    profilPic.style.transform = 'translateX(-50%)';
    perso.insertAdjacentHTML("afterbegin", "<h1 class='text-center name mb-3'> PIERRE PAC</h1><h4 class='text-center name mb-5'>CONCEPTEUR DEVELOPPEUR</h4>");
    logo.forEach(e => {
        e.style.width = ('15%');
    });
    document.querySelector('.name').style.marginTop = ('15%');
}

if(windowWith>=500 && windowWith<=768){
    let allPerso = perso.childNodes;
    let allXp = xp.childNodes;
    allPerso[0].style.width = ('80%');
    allPerso[0].style.marginLeft = ('10%');
    allPerso[1].style.width = ('80%');
    allPerso[1].style.marginLeft = ('10%');
    allPerso[3].style.width = ('80%');
    allPerso[3].style.marginLeft = ('10%');
    allPerso[5].style.width = ('80%');
    allPerso[5].style.marginLeft = ('10%');
    allPerso[7].style.width = ('80%');
    allPerso[7].style.marginLeft = ('10%');
    document.querySelector('.name').style.marginTop = ('15%');
    allXp[1].style.width = ('80%');
    allXp[1].style.marginLeft = ('10%');
    allXp[3].style.width = ('80%');
    allXp[3].style.marginLeft = ('10%');
}

if(windowWith>=1024){
    marginHaut = (((heightHeader.clientHeight)/3)*2)+ 'px'; 
    profilPic.style.marginTop = marginHaut;
    xp.insertAdjacentHTML("afterbegin", "<h1 class='text-center name mb-3'> PIERRE PAC</h1><h4 class='text-center name mb-5'>CONCEPTEUR DEVELOPPEUR</h4>")
    perso.style.paddingTop = '11%';
    profilPic.style.marginLeft = marginLeftProfilPic;
    logo.forEach(e => {
        e.style.width = ('15%');
    });
    xp.classList.remove('px-2');
    xp.classList.add('px-4');
}
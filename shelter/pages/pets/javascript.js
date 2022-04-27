let petsInfo = [
    {
       "name": "Jennifer",
       "img": "../../assets/images/pets-jennifer.png",
       "type": "Dog",
       "breed": "Labrador",
       "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
       "age": "2 months",
       "inoculations": ["none"],
       "diseases": ["none"],
       "parasites": ["none"],
 
    },
    {
       "name": "Sophia",
       "img": "../../assets/images/pets-sophia.png",
       "type": "Dog",
       "breed": "Shih tzu",
       "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
       "age": "1 month",
       "inoculations": ["parvovirus"],
       "diseases": ["none"],
       "parasites": ["none"],
    },
    {
       "name": "Woody",
       "img": "../../assets/images/pets-woody.png",
       "type": "Dog",
       "breed": "Golden Retriever",
       "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
       "age": "3 years 6 months",
       "inoculations": ["adenovirus", "distemper"],
       "diseases": ["right back leg mobility reduced"],
       "parasites": ["none"],
    },
 
    {
       "name": "Scarlett",
       "img": "../../assets/images/pets-scarlet.png",
       "type": "Dog",
       "breed": "Jack Russell Terrier",
       "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
       "age": "3 months",
       "inoculations": ["parainfluenza"],
       "diseases": ["none"],
       "parasites": ["none"],
    },
    {
       "name": "Katrine",
       "img": "../../assets/images/pets-katrine.png",
       "type": "Cat",
       "breed": "British Shorthair",
       "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
       "age": "6 months",
       "inoculations": ["panleukopenia"],
       "diseases": ["none"],
       "parasites": ["none"],
    },
    {
       "name": "Timmy",
       "img": "../../assets/images/pets-timmy.png",
       "type": "Cat",
       "breed": "British Shorthair",
       "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
       "age": "2 years 3 months",
       "inoculations": ["calicivirus", "viral rhinotracheitis"],
       "diseases": ["kidney stones"],
       "parasites": ["none"],
    },
    {
       "name": "Freddie",
       "img": "../../assets/images/pets-freddie.png",
       "type": "Cat",
       "breed": "British Shorthair",
       "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
       "age": "2 months",
       "inoculations": ["rabies"],
       "diseases": ["none"],
       "parasites": ["none"],
    },
    {
       "name": "Charly",
       "img": "../../assets/images/pets-charly.png",
       "type": "Dog",
       "breed": "Jack Russell Terrier",
       "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
       "age": "8 years",
       "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
       "diseases": ["deafness", "blindness"],
       "parasites": ["lice", "fleas"],
    }
 ];
 
 for (let i = 0; i < petsInfo.length; i++) {
    petsInfo[i].index = i;
 }

 let petsNumbers = {};
 let getPetsNumbers = function() {
     for (let i = 0; i < petsInfo.length; i++) {
         petsNumbers[petsInfo[i].name] = i;
     }
     return petsNumbers;
 }

 petsNumbers = getPetsNumbers();

 /*---------------------------------popup------------------------------------ */

let ourFriendCards = document.body.querySelector('.our-friends__cards');
let popupWrapper = document.querySelector('.popup__wrapper');
let overlay = document.body.querySelector('.overlay');
var petCards = document.querySelectorAll('.pet-card');
let closePopupIcon;
let header = document.querySelector('header');

let openPopup = function(petCard) {

    popupWrapper.classList.toggle('active-popup');
    document.body.classList.toggle('not-scroll');
    overlay.classList.toggle('dark-overlay');
    header.style.zIndex = "-1";
 
    let petName = petCard.querySelector('.pet-card__name').innerText;
    let index = petsNumbers[petName];
    
    popupWrapper.innerHTML = `
    <div class="popup">
             <div class="popup__close">
             </div>
                <div class="popup__image">
                   <img src="${petsInfo[index].img}" alt="${petsInfo[index].name} ${petsInfo[index].type}">
                </div>
                <div class="popup__info">
                   <div class="popup__info-name">
                      <h4>${petsInfo[index].name}</h4>
                   </div>
                   <div class="popup__info-breed">
                      <h5>${petsInfo[index].type} - ${petsInfo[index].breed}</h5>
                   </div>
                   <div class="popup__info-description">
                      <p>${petsInfo[index].description}</p>
                   </div>
                   <ul class="popup__info-list">
                      <li class="popup__info-age"><span><strong>Age:</strong> ${petsInfo[index].age}</span></li>
                      <li class="popup__info-inoculations"><span><strong>Inoculations:</strong> ${petsInfo[index].inoculations}</span></li>
                      <li class="popup__info-diseases"><span><strong>Diseases:</strong> ${petsInfo[index].diseases}</span></li>
                      <li class="popup__info-parasites"><span><strong>Parasites:</strong> ${petsInfo[index].parasites}</span></li>
                   </ul>
                </div>
          </div>
 
    `;
 
    closePopupIcon = popupWrapper.querySelector('.popup__close');
    closePopupIcon.addEventListener('click', closePopup);
 
    overlay.addEventListener('click', closePopup);
    overlay.addEventListener('mouseover', function() {
       closePopupIcon.style.backgroundColor = "#F1CDB3";
       overlay.style.cursor = "pointer";
    })
    overlay.addEventListener('mouseout', function() {
       closePopupIcon.style.backgroundColor = "transparent";
       overlay.style.cursor = "";
    })
    closePopupIcon.addEventListener('mouseover', function() {
       closePopupIcon.style.backgroundColor = "#F1CDB3";
    })
    closePopupIcon.addEventListener('mouseout', function() {
       closePopupIcon.style.backgroundColor = "transparent";
    })
 }
 
 let closePopup = function() {
    popupWrapper.innerHTML = '';
    popupWrapper.classList.remove('active-popup');
    document.body.classList.remove('not-scroll');
    overlay.classList.remove('dark-overlay');
    header.style.zIndex = "";
 }
 
 ourFriendCards.addEventListener('click', (elem) => {
    if (elem.target.matches('.pet-card')) {
       openPopup(elem.target);
    }
 
    else if (elem.target.matches('.our-friends__cards')) return;
 
    else  {
       openPopup(elem.target.closest('.pet-card'));
    }
    
 })



//////burger
let burger = document.body.querySelector('.header__burger');
let menu = document.body.querySelector('.header__menu');
let logo = document.body.querySelector('.header__logo');
burger.addEventListener('click', function(){
	menu.classList.toggle('open');
    burger.classList.toggle('active');
    overlay.classList.toggle('dark-overlay');
    logo.classList.toggle('logo-menu');
    document.body.classList.toggle('not-scroll');
    header.classList.toggle('inherit-header');
});

let closeBurger = function() {
    menu.classList.remove('open');
    burger.classList.remove('active');
    overlay.classList.remove('dark-overlay');
    document.body.classList.remove('not-scroll');
    logo.classList.remove('logo-menu');
    header.classList.remove('inherit-header');
}

overlay.addEventListener('click', closeBurger);

let nodeList = document.body.querySelectorAll('.menu__item'),
    menuItems = Array.from(nodeList);

for (let i = 0; i <= menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeBurger);
}







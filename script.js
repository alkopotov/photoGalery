const data = ['img/img01.jpeg', 'img/img02.jpeg', 'img/img03.jpeg', 'img/img04.jpeg', 'img/img05.jpeg', 'img/img06.jpeg', 'img/img07.jpeg', 'img/img08.jpeg','img/img09.jpeg', 'img/img10.jpeg', 'img/img11.jpeg', 'img/img12.jpeg', 'img/img13.jpeg', 'img/img14.jpeg'];



const getPhotosForGallery = function(links, num){
  let galleryPhotos = [];
  galleryPhotos.push(links[getNumber(links.length-1)]);
  while (galleryPhotos.length < num) {
    let cur = links[getNumber(links.length-1)];
    if (!(galleryPhotos.includes(cur))) {
      galleryPhotos.push(cur);
    }
  }
  return galleryPhotos;
}

const createGalery  = function(parent, photos) {
parent.style.display = 'grid';
parent.style.gridTemplateColumns = `repeat(${photos.length}, 1fr)`
parent.style.gridTemplateRows = `5fr 1fr`
largePic = document.createElement('div')
largePic.className = 'largePic';
largePic.style.gridColumnEnd = `span ${photos.length}`;
largePic.style.backgroundImage = `url(${photos[0]})`
parent.append(largePic)
photos.forEach(el => {
  createCard(el, parent);
})
}

const createCard = function (pict, parent){
  let card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundImage = `url(${pict})`;
  card.style.backgroundSize = 'cover';
  card.style.cursor = 'pointer';
  card.addEventListener('click', function (){
    largePic.style.backgroundImage = `url(${pict})`
  })
  parent.appendChild(card);
}

w = document.querySelector('.wrapper');
createGalery(w, getPhotosForGallery(data, getNumber(5,8)))
r = document.querySelector('.btn')
r.addEventListener('click', function () {
  w.innerHTML = ''
  createGalery(w, getPhotosForGallery(data, getNumber(5,8)))
})


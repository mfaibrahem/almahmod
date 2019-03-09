if (document.querySelector('.hero')) {
  const heros = document.querySelectorAll('.hero');
  let myIndex = 0;

  function carousel() {
    // heros.forEach(hero => hero.style.display = 'none');
    heros.forEach(hero => (hero.style.opacity = '0'));
    myIndex++;
    if (myIndex > heros.length) myIndex = 1;
    // heros[myIndex - 1].style.display = 'block';
    heros[myIndex - 1].style.opacity = '1';
    setTimeout(carousel, 4000);
  }

  carousel();
}

const text_truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
const UIdetailsP = document.querySelectorAll('.details-p');
UIdetailsP.forEach(p => (p.textContent = text_truncate(p.innerText)));

//
//
//
//
//
//
//
//
//
//
new WOW().init();

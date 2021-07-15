// Building dynamic navbat

const navList = document.querySelector('ul');
const sections = Array.from(document.getElementsByTagName("section"));


for(section of sections) {
  let listItem = document.createElement('li');
  listItem.classList.add(section.id);
  let link = document.createElement('a');
  link.textContent = section.dataset.nav;
  listItem.appendChild(link);
  link.setAttribute('href', `#${section.getAttribute('id')}`);
  link.addEventListener('click', () => {
    section.scrollIntoView({behavior: 'smooth'})
  })
  navList.appendChild(listItem);
}

// Adding change of background on scroll
const listerner = function(){
  sections.forEach(zone => {
    zone.getBoundingClientRect();
    if(zone.getBoundingClientRect().top >= 83 && zone.getBoundingClientRect().top <= 376){
      zone.classList.add('active__section');
    }
    else{
      zone.classList.remove('active__section');
    }
  })
}
document.addEventListener('scroll', listerner);

// Adding hightlighted navbar on scroll

const nav = document.querySelectorAll('nav .container ul li');
console.log(nav);

window.addEventListener('scroll', ()=> {
  let current = ''; 
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)){
      current = section.getAttribute('id');
    }
  })
  console.log(current);
  nav.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })

})











// Building menu

const navList = document.querySelector('ul');
// const sections = document.querySelectorAll('section');
const sections = Array.from(document.getElementsByTagName("section"));


for(section of sections) {
  let listItem = document.createElement('li');
  listItem.setAttribute('class', `#${section.getAttribute('id')}`);
  let link = document.createElement('a');
  link.textContent = section.dataset.nav;
  link.setAttribute('id', `#${section.getAttribute('id')}`);
  listItem.appendChild(link);
  link.addEventListener('click', () => {
    section.scrollIntoView({behavior: 'smooth'})
  })
  navList.appendChild(listItem);
}


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


const nav = document.querySelectorAll('nav .container ul li');
console.log(nav);

window.addEventListener('scroll', ()=> {
  let current = ''; 
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop){
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











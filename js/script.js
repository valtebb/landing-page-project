// Building menu

const navList = document.querySelector('ul');
// const sections = document.querySelectorAll('section');
const sections = Array.from(document.getElementsByTagName("section"));
console.log(sections);
const nav = document.querySelectorAll('.container ul li');
console.log(nav);

for(section of sections) {
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  link.textContent = section.dataset.nav;
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
      zone.classList.add('active');
    }
    else{
      zone.classList.remove('active');
    }
  })
}
document.addEventListener('scroll', listerner);





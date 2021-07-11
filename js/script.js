// Building menu

const navList = document.querySelector('ul');
const sections = document.querySelectorAll('section');
const nav = document.querySelectorAll('nav .container ul li');

for(section of sections) {
  let listItem = document.createElement('li');
  listItem.setAttribute('class', `sections${ 1}`)
  let link = document.createElement('a');
  link.textContent = section.dataset.nav;
  listItem.appendChild(link);
  navList.appendChild(listItem);
}


  
  // Set navigation items to activate when on particular section
  
  window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageXOffset >= sectionTop){
      current = section.getAttribute('id');
    }
  })
  nav.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })

  })
  



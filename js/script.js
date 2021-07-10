// Building menu

const nav = document.querySelector('ul');
const navItems = ['Home', 'Tower Bridge', 'Natural History Museum', 'Borough Market'];

navItems.forEach((item, index) => {
    const link = document.createElement('a');
    link.innerText = item;
    link.href = `#section${index + 1}`;
    nav.appendChild(link);

    const li = document.createElement('li');
    li.setAttribute('class', `section${index + 1}`);
    li.appendChild(link);
    nav.appendChild(li)
})

// Set navigation items to activate when on particular section


const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav .container ul li');
console.log(navList);

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
  navList.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
  
})






const menuIcon = document.getElementById('menu-icon');
const menuItems = document.querySelector('.menu-items1')


const switchNav = () =>{
    menuIcon.classList.toggle('change');

// fade in menu items
if(menuItems.classList.contains('menu-items1')){
    menuItems.classList.replace('menu-items1','menu-items2')
}else{
    menuItems.classList.replace('menu-items2','menu-items1')

}
}









menuIcon.addEventListener('click',switchNav);
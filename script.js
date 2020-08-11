// select buttons and sidebar

const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// button actions

menu_btn.addEventListener('click', () =>{
    sidebar.classList.toggle("sidebar-act");
})
close_btn.addEventListener('click', () =>{
    sidebar.classList.remove("sidebar-act");
})
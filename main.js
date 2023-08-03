const MenuLogo=document.querySelector("#Menu")
const close=document.querySelector(".close")
const Menu=document.querySelector(".MenuMobile")

MenuLogo.addEventListener("click",Menuavaible)
close.addEventListener("click",Menuavaible)

function Menuavaible(){ 
    Menu.classList.toggle("inactive")
}
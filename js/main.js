
let menuProcess = false;
let mobileMenuContainer = document.querySelector(".mobile-menu-container") 
let mobileMenuButton = document.querySelector(".mobile-menu-button") 
let screenDarken = document.querySelector(".screen-darken") 
let dropdown = document.querySelectorAll(".dropdown") 


function changeMenuStatus(){
    if (!menuProcess) {
        menuProcess = true;
        mobileMenuButton.classList.toggle("change")
        screenDarken.classList.remove("d-none")
        let isOpenMenu = mobileMenuButton.classList.contains("change");
        if (isOpenMenu) {
            mobileMenuContainer.classList.remove("d-none");
        } else {
          setTimeout(function () {
            mobileMenuContainer.classList.add("d-none");
            screenDarken.classList.add("d-none");
          }, 900);
        }
        setTimeout(function () {
          menuProcess = false;
        }, 900);
      }
}
screenDarken.addEventListener("click", function(){
  changeMenuStatus()
})
function toggleDropdown(menu_item){
  let dropdownUl = menu_item.nextElementSibling.nextElementSibling
  let svg_path = menu_item.nextElementSibling.firstElementChild

  dropdownUl.classList.toggle("d-none");

  if(dropdownUl.classList.contains("d-none")){
    svg_path.setAttribute("d", "m1 1 4 4 4-4")
  }else{
    svg_path.setAttribute("d", "m1 5 4-4 4 4")
  }
}

var menuItem = document.querySelectorAll('.item-menu')

function selectlink (){
    menuItem.forEach((item)=>
       item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click' , function(){
    menuSide.classList.toggle('expandir')
})

const mainImage = document.getElementById("mainImage");
const img = document.querySelector("img");

mainImage.addEventListener("mousemove", (e) =>{
    const x = e.clientX = e.target.offsetLeft;
    const y = e.clientY = e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = '${x}px ${y}px';
    img.style.transform = "scale(2)";
});

mainImage.addEventListener("mouseleave", () => {

    mainImage.style.transformOrigin = "center center";
   mainImage.style.transform = "scale(1)";
});
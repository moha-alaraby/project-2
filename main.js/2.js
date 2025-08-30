let landing = document.querySelector(".landing");
let photos = document.querySelectorAll(".landing img");
let arr = Array.from(photos)

let CurrentSlide = 0;
  photos[CurrentSlide].classList.add("active")



let next = document.getElementById("next")
let prev = document.getElementById("prev")
let num = document.getElementsByClassName("num")
num[0].textContent = CurrentSlide+1

let uls = document.createElement("ul")

uls.setAttribute("class","uls")
for(let i=0; i<arr.length; i++){
  let lis = document.createElement("li")
  lis.setAttribute("data",i)
  uls.appendChild(lis)
}

landing.appendChild(uls)

let lis = document.querySelectorAll(".landing .uls li")

let lists = Array.from(lis)

  lists[CurrentSlide].classList.add("active")

//remove the class
function removeClass(){
for(let j=0; j<arr.length; j++){
  photos[j].classList.remove("active");
}
}
function removli(){
  for(let j=0; j<arr.length; j++){
    lists[j].classList.remove("active");
  }  
}
  



  photos[photos.length-1].classList.add("end-none")
  photos[0].classList.add("start-none")

  setInterval(function(){
  if(photos[CurrentSlide].classList.contains("end-none")){
    CurrentSlide = 0
    theChecker()
  }else{
    CurrentSlide ++
    theChecker()
  }
  },4000)

for(let i=0; i<arr.length; i++){
  lists[i].onclick = function(){
        CurrentSlide = i
        theChecker()
    }
    
}

function nexts(){
  if(photos[CurrentSlide].classList.contains("end-none")){
    CurrentSlide = 0
    theChecker()
  }else{
    CurrentSlide ++
    theChecker()
  }
}

function prevs(){
  if(photos[CurrentSlide].classList.contains("start-none")){
    CurrentSlide = photos.length-1
    theChecker()
  }else{
    CurrentSlide --
    theChecker()
  }
}

next.onclick = nexts
prev.onclick = prevs

function theChecker(){
  removli()
  removeClass()
photos[CurrentSlide].classList.add("active")
lists[CurrentSlide].classList.add("active")
num[0].textContent = CurrentSlide+1
}
// menu
let menu = document.querySelector(".links .menu");
let list = document.querySelector(".links ul");
console.log(menu)
console.log(list)
menu.onclick = ()=>{
list.classList.toggle("active")
}
// serch
let links = document.querySelector(".links");
let serch = document.querySelector(".links .serch");



serch.onclick = ()=>{
serch.style.transition="0.8s"
serch.classList.add("del");
let divSerch = document.createElement("div");
let inpSerch = document.createElement("input");
divSerch.appendChild(inpSerch)
links.appendChild(divSerch)
divSerch.style.height = "40px"
inpSerch.classList.add("inpSerch")
inpSerch.focus()
}
document.addEventListener("focusout", (e) => {
  if (e.target.classList.contains("inpSerch")) {
    console.log(e.target.parentElement)
    e.target.parentElement.style.display="none"
    serch.classList.remove("del")
  }
});
// links
let ulPor = document.querySelector(".portfolio .links ul");
let linksPor = document.querySelectorAll(".portfolio .links ul li");
console.log(linksPor)


for(let i=0; i<ulPor.children.length; i++){

  linksPor[i].onclick =()=>{
      linksPor.forEach((e)=>{
        e.classList.remove("active");
      })
      linksPor[i].classList.add("active")
      }
}
// scroller
let ele = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

document.addEventListener("scroll", ()=>{

    let scrollTop = document.documentElement.scrollTop;
    ele.style.width =`${(scrollTop/height)*100}%`
    // if(ele.style.width > `${60.496}%`){
      //  console.log(document.documentElement.scrollHeight)
    // }
});
// console.log(document.documentElement.scrollHeight)
// console.log(document.documentElement.clientHeight)
// // console.log(document.documentElement.scrollTop)
let colection = document.querySelector(".skill .colection")
let colUL = document.querySelector(".skill .colection ul")
let colLi = document.querySelectorAll(".skill .colection ul li")
let skill = document.querySelectorAll(".skill .rev")

let counter = colection.children.length
let current = 0
for(let i=0 ;i<colUL.children.length; i++){
  
  colLi[i].onclick =()=>{

    skill.forEach((e)=>{
      e.classList.add("hidden")
    })
    colLi.forEach((e)=>{
      e.classList.remove("active")
    })

    colLi[i].classList.add("active")
    skill[i].classList.remove("hidden") 
  }
  
}
skill[current].classList.remove("hidden") 

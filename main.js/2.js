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

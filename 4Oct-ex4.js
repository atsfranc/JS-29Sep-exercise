// document.getElementById("container")
// document.querySelector("#container")
// document.querySelectorAll(".second")
// document.querySelector("ol.third")
// const greeting = document.getElementById("container")
// greeting.innerText = "Hello"
// const footer = document.querySelector(".footer")
// footer.classList.add("main")
// footer.classList.remove("main")
var newLi = document.createElement("li")
newLi.innerText = "four"
var list = document.querySelector("ul")
list.appendChild(newLi)
var liInsideOl = document.querySelectorAll("ol li");
for(var i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}
var footer = document.querySelector(".footer");
footer.remove();
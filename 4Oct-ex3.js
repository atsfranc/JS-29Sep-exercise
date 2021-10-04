button.addEventListener("click", (event) => { 
  let listing = document.getElementById("listing");
  let subList = listing.querySelectorAll("a")
  console.log(subList.length) // shows the number of links
  console.log(subList[0].origin) // show the first link
  console.log(subList[subList.length - 1].origin) // show the last link
});
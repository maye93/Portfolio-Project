let list = document.getElementById("myList");
var counter = 0

var animals = [
  "images/animals/chinchilla.png",
  "images/animals/cockatiels.png", 
  "images/animals/fox.png", 
  "images/animals/glider.png", 
  "images/animals/hedgehog.png", 
  "images/animals/pom.png", 
  "images/animals/racoon.png", 
  "images/animals/retriever.jpeg", 
  "images/animals/samoyed.png", 
  "images/animals/toucan.png"
]
var names = [
  "Chim",
  "Taffy",
  "Flinch",
  "Swifty",
  "Hermes",
  "Peanut Butter",
  "Rufus",
  "Goldie",
  "Snickers",
  "Truffle"
]
var ages = [
  "5",
  "8",
  "2",
  "6",
  "4",
  "1",
  "3",
  "10",
  "9",
  "7"
]

document.querySelector("#animal").src = animals[0]
document.querySelector("#name").innerHTML = names[0]
document.querySelector("#age").innerHTML = ages[0]
  
function heart() {
  var ul = document.getElementById("animalList");
  var li = document.createElement("h5");
  var img = document.createElement("img");

  img.style.width = '80px';
  img.style.height = 'auto';

  if (counter < animals.length-1) {
    document.querySelector("#animal").src = animals[counter+1]
    document.querySelector("#name").innerHTML = names[counter+1]
    document.querySelector("#age").innerHTML = ages[counter+1]
    
    img.src = animals[counter];
    
    li.appendChild(document.createTextNode(ages[counter] +" - "+ names[counter]));
    ul.appendChild(img);
    ul.appendChild(li);

    counter++
  } else if (counter == animals.length-1){
    img.src = animals[counter];
    
    li.appendChild(document.createTextNode(ages[counter] +" - "+ names[counter]));
    ul.appendChild(img);
    ul.appendChild(li);

    document.querySelector(".heartReject").hidden = true
  } else {
    document.querySelector(".heartReject").hidden = true
  }    
}

function reject() {
  if (counter < animals.length-1) {
    document.querySelector("#animal").src = animals[counter+1]
    document.querySelector("#name").innerHTML = names[counter+1]
    document.querySelector("#age").innerHTML = ages[counter+1]
    counter++
  } else if (counter == animals.length-1){
    document.querySelector(".heartReject").hidden = true
  } else {
    document.querySelector(".heartReject").hidden = true
  }    
}
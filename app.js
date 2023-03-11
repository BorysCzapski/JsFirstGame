//Block movement
let char = document.getElementById('cont');

//CSS values of character
var charVal = document.querySelector('#character');

//List of all computed styles form CSS external file
var styles = getComputedStyle(charVal);




//left values only
var leftVal = styles.left;
//Removing px to make it a int
var leftAr = leftVal.split('px');
//Removing an empty array index
let left = leftAr.pop();



var bottom = parseInt(styles.bottom);





//left func
function leftMove(){
  if (left >= 1){
    left = left - 10;
    char.style.left = `${left}px`;}
}

//right func
function rightMove(){
  if (left <= 299){
  left += 10;
  char.style.left = `${left}px`;
  console.log(left)}
}
//up func
function upMove(){
  if (bottom <= 549){
    bottom += 10;
    char.style.bottom = `${bottom}px`;
    console.log(bottom)}
  }

//down func
function downMove(){
  if (bottom >= 1){
    bottom -= 10;
    char.style.bottom = `${bottom}px`;
    console.log(bottom)}
  }

//debugger
rightMove();
leftMove();





//class append test
function animate(){
  var elem = document.querySelector('#bullet');
  elem.className += " " + "active";
  
  console.log(elem.classList)
  setTimeout(function () {
    var elem = document.getElementById('bullet');
  elem.classList.remove("active");
  console.log("removed");
}, 3000);
  
}
 
  




//counter


//FIXME:add collision animation stop


//movement listener
document.addEventListener('keydown' , (event) => {
  var elem = document.getElementById('bullet');
  if (elem.style.left > 500){
    elem.classList.remove("active");
  }
  var keyName = event.key;
  if (keyName === 'ArrowLeft'){
    animate();
  }
  if (keyName === 'ArrowUp'){
    upMove();
  }
  if (keyName === 'ArrowDown'){
    downMove();
  }


  

  
}
);

//Function that gets the center of the character



var a = 0;
document.getElementById("score").innerHTML = a;
var checkHit = setInterval(function(){
  //defining all the necessary components
  let ene = document.querySelector("#enemy");  
  var enemyPos = getComputedStyle(ene);
  let bull = document.querySelector("#bullet");  
  var bullPos = getComputedStyle(bull);
  let cont = document.querySelector("#cont");  
  var contPos = getComputedStyle(cont);
  //values for top and left 
  var bullTVal = bullPos.bottom;
  var bullVal = bullPos.left;
  var enemyVal = enemyPos.left;
  var enemyTVal = enemyPos.bottom;
  var contVal = contPos.bottom;

  // Convert pixel values to integers
  var bullValInt = parseInt(bullVal);
  var enemyValInt = parseInt(enemyVal);
  var bullTValInt = parseInt(bullTVal);
  var enemyTValInt = parseInt(enemyTVal);
  var contValInt = parseInt(contVal); //this is the bottom pos

  // Collision detection
  if (bullValInt >= enemyValInt && bullValInt <= enemyValInt + 50
    && contValInt >= enemyTValInt - 20 && contValInt <= enemyTValInt + 20) { // Check if bullet bottom position is above container bottom position
    var elem = document.getElementById('bullet');
    elem.classList.remove("active");
    console.log("removed");
    a++;
    document.getElementById("score").innerHTML = a;
}

}, 10);



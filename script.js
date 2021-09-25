var  up = document.getElementById('up');
var text = document.getElementById('text');
var image = document.getElementById('image')

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("openbtn").style.marginLeft = "250px";
    document.getElementById("openbtn").style.visibility = "hidden";
}
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("openbtn").style.marginLeft= "0";
    document.getElementById("openbtn").style.visibility= "visible";
}

window.onscroll = function(){
  if(document.documentElement.scrollTop > 18 || document.body.scrollTop > 18){
    up.style.visibility = "visible";
  }
  else{
    up.style.visibility = "hidden";
  }
}

function show1() {
  document.getElementById('image').src='media/1.jpg';
  text.innerHTML = "Front View";
}
function show2() {
  document.getElementById('image').src='media/2.jpg';
  text.innerHTML = "Right Side View";
}
function show3() {
  document.getElementById('image').src='media/3.jpg';
  text.innerHTML = "Left Side View";
}
function show4() {
  document.getElementById('image').src='media/4.jpg';
  text.innerHTML = "Back View";
}
function show5() {
  document.getElementById('image').src='media/5.jpg';
  text.innerHTML = "Top View";
}
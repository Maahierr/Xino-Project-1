var  up = document.getElementById('up');
let images = ['media/1.jpg', 'media/2.jpg', 'media/3.jpg', 'media/4.jpg', 'media/5.jpg']

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

setInterval(function(){
  let random = Math.floor(Math.random ()* 5);
  image.src = images[random];
},3000)
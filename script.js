var  up = document.getElementById('up');

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
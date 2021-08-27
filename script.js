var  up = document.getElementById('up');
var img = document.createElement("img");
var src = document.getElementById("visibleImg");

img.style.width = "250px";
img.style.height = "250px";

var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');
var i3 = document.getElementById('i3');
var i4 = document.getElementById('i4');
var i5 = document.getElementById('i5');

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

function visibleImg(){
  if(i1.onclick){
    img.src = "media/1.jpg";
    src.appendChild(img);
  }

  else if(i2.onclick){
    img.src = "media/2.jpg";
    src.appendChild(img);
  }

  else if(i3.onclick){
    img.src = "media/3.jpg";
    src.appendChild(img);
  }

  else if(i4.onclick){
    img.src = "media/4.jpg";
    src.appendChild(img);
  }

  else if(i5.onclick){
    img.src = "media/5.jpg";
    src.appendChild(img);
  }
}
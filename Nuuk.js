console.clear();
var popup = document.getElementsByClassName("pop-up-list")[0];
var overlay = document.getElementsByClassName("overlay-pop-up")[0];
var getButton = document.getElementsByClassName("info-wrapper")[0];
var button = document.getElementsByClassName("button")[0];
var orangeButton = document.getElementById('orange-button');
var closeBut = document.getElementsByClassName('pop-up-button')[0];
var pcb = document.getElementsByClassName('close-button')[0];
var line1 = document.getElementsByClassName('line-1')[0];
var line2 = document.getElementsByClassName('line-2')[0];
var phoneDrop = document.getElementsByClassName('phone-drop')[0];
var body = document.getElementsByTagName('body')[0];
getButton.onclick=function(){
	popup.style.display = "block";
	overlay.style.display = "block";
}
button.onclick=function(){
	popup.style.display = "block";
	overlay.style.display = "block";
	
}
orangeButton.onclick=function(){
	popup.style.display = "block";
	overlay.style.display = "block";
}
overlay.onclick=function(){
	popup.style.display = "none";
	overlay.style.display = "none";	
}
closeBut.onclick=function(){
	popup.style.display = "none";
	overlay.style.display = "none";	
}

pcb.onclick=function(){
	var margin = window.getComputedStyle(line2).marginTop;
  if(window.getComputedStyle(body).width <= "600px" || window.getComputedStyle(body).width <= "768px" ){
	if(margin == "10px"){
		phoneDrop.style.display = "flex";
		line2.style.marginTop = "0px"
		line1.style.transform = "rotateZ(54deg)";
		line2.style.transform = "rotateZ(-54deg)";
	}
	if(margin == "0px"){
		phoneDrop.style.display = "none";
		line2.style.marginTop = "10px"
		line1.style.transform = "rotateZ(0deg)";
		line2.style.transform = "rotateZ(0deg)";
	}
  }
  else if(window.getComputedStyle(body).width > "768px"){
    phoneDrop.style.display = "none"
  }
}

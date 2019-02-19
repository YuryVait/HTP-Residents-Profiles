// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
	var myWidth = myImage.getAttribute('width');
    if(myWidth === '600') {
	  myImage.setAttribute ('width','');
	  myImage.setAttribute ('src','images/graph01.png');
    } else {
	  myImage.setAttribute ('width','600');		
      myImage.setAttribute ('src','images/graph01.png');
    }
}
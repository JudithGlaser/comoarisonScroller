function onDOMContentLoaded() {
  console.log("DOM loaded");
}

// Initial init of page 
window.addEventListener("DOMContentLoaded", onDOMContentLoaded);


window.addEventListener("scroll", function(event) {

    var position = document.getElementById('position');

    var scroll_y = this.scrollY;
    // console.log(scroll_x, scroll_y);
    position.innerHTML =  scroll_y;
    elementSlide();
});

// Check if comparison element is in viewport
function elementInViewport() {
    var myElement = document.getElementById('comparison');
    var bounding = myElement.getBoundingClientRect();
   
    if (bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {

        console.log('Element is in the viewport!');
        return true;
    }
    else {

        console.log('Element is NOT in the viewport!');
        return false;
    }
}

function viewFactor(){
 // is Element in View?
  var inView = elementInViewport();

  if (inView === false) {
    return 0;
  }
  else {
 // Get Container height
 var containerHeight = document.getElementById('comparion-container').clientHeight;
 var containerWidth = document.getElementById('comparion-container').clientWidth;
 // Get View height
 var viewHeight = window.innerHeight || document.documentElement.clientHeight;

 //Get container position
 var myContainer = document.getElementById('comparion-container');
 var rect = myContainer.getBoundingClientRect();
 console.log(rect.top, rect.right, rect.bottom, rect.left);

 centerPos = rect.top + (containerHeight/2) ;
 climaxStart = viewHeight/2 + 50;
 climaxStop = viewHeight/2 - 50;

 console.log("centerPos:" + centerPos);
//  console.log("climax:" + climax);
 console.log("containerWidth:" + containerWidth);
//  console.log("factor:" + factor);
 
 //Calculate progress

 if ((climaxStart - centerPos) < 0){
  progess = (climaxStart/centerPos)*containerWidth;;
  }

 if ((climaxStop - centerPos) > 0) {
  progess =  (centerPos/climaxStop)*containerWidth;;
 } 

  console.log("progess:" + progess)

  return progess;
  }
}

// When comparison element is in viewport start slide
function elementSlide() {
  var progess = viewFactor();
  document.getElementById("comparison").style.width = `${progess}px`;
}
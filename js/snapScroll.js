document.addEventListener('wheel', function (e) {
    let scroll = e.wheelDeltaY < 0 ? 1 : -1;
    if (canScrollWindow == true) nextWindow(scroll);
});

var endTouchScroll = 0;
var startTouchScroll = 0;

document.addEventListener('touchstart', function (e) {
    startTouchScroll = e.changedTouches[0].clientY;
});

document.addEventListener('touchend', function (e) {
    endTouchScroll = e.changedTouches[0].clientY;    

    let scroll = startTouchScroll - endTouchScroll;
    if (canScrollWindow == true) 
        nextWindow(scroll > 50 ? 1 : scroll < -50 ? -1 : 0);
});


document.onkeydown = function (e) {

    //window up key
    if (e.keyCode == 38) {
        nextWindow(-1);
    }
    //window down key
    if (e.keyCode == 40) {
        nextWindow(1);
    }
    //Space to scroll to start
    if (e.keyCode == 32) {
        scrollWindow(0);
    }

    //left to scroll rotator left
    if (e.keyCode == 39) {
        rotateShower(-1);
    } 
    //right to scroll rotator right
    if (e.keyCode == 37) {
        rotateShower(1);
    }

};
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

//Just to rotatate the current shower
function rotateShower(dir) {
    
    if (currentWindow == 3) {
    
        scrollWindow(3);
        RotateToNextPanel('shower', dir);
        nextInfoPage(dir);
    }
}
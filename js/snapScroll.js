document.addEventListener('wheel', function (e) {
    let scroll = e.wheelDeltaY < 0 ? 1 : -1;
    if (canScrollWindow == true) nextWindow(scroll);
});

var touchScrollOffsetY = 0;
var oldTouchScrollOffset = 0;
var freshScroll = true;
document.addEventListener('touchmove', function (e) {
    touchScrollOffsetY = e.changedTouches[0].clientY;

    let scroll = touchScrollOffsetY - oldTouchScrollOffset;
    if (canScrollWindow == true && freshScroll == false) 
        nextWindow(scroll > 50 ? -1 : scroll < -50 ? 1 : 0);
    
    freshScroll = false;
    oldTouchScrollOffset = touchScrollOffsetY;
});

document.addEventListener('touchend', () => {
    freshScroll = true;
});


addEventListener('keydown', function (e) {
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
});
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
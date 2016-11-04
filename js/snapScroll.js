snapScroll = function () {

document.addEventListener('wheel', function (e) {
    let scroll = e.wheelDeltaY < 0 ? 1 : -1;
    if (canScrollWindow == true) nextWindow(scroll);
});

var touchScrollOffsetY = 0;
var oldTouchScrollOffset = 0;
document.addEventListener('touchmove', function (e) {
    touchScrollOffsetY = e.changedTouches[0].clientY;

    let scroll = touchScrollOffsetY - oldTouchScrollOffset;
    if (canScrollWindow == true) nextWindow(scroll > 0 ? 1 : -1);
    
    oldTouchScrollOffset = touchScrollOffsetY;
});

}

snapScroll();
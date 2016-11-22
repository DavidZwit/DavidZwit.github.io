this.shower = new RotatingShower("RotateTiles", 500);
AddRotator(this.shower);

addEventListener('keydown', function (e) {

        if (e.keyCode == 39) {
            rotateShower(-1);
        } 
        if (e.keyCode == 37) {
            rotateShower(1);
        }
});

function rotateShower(dir) {
    if (currentWindow == 3) {
    
        scrollWindow(3);
        RotateToNextPanel('shower', dir);
        nextInfoPage(dir);
    }
}
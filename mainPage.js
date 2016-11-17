
    
    this.shower = new RotatingShower("RotateTiles", 500);
    AddRotator(this.shower);
    addEventListener('keydown', function (e) {

        if (e.keyCode == 39) {
            scrollWindow(3);
            RotateToNextPanel('shower', -1);
        } 
        if (e.keyCode == 37) {
            scrollWindow(3);
            RotateToNextPanel('shower', 1);
        }
    });
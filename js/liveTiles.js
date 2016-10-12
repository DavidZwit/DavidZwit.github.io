//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

//----Moving-the-live-tiles----\\

var tiles = addObjectsToDict("liveTile");
var tileAsElement = document.getElementsByClassName("liveTile");

console.log(tileAsElement);

function AddRotator(it) {

    it.rotated["liveTiles"] = function () {
        var newHeight = function (tile) {
            //Still need to find a way to calculate good sizes      
            return 400;
        }

        for (var t in tiles) tiles[t].height = newHeight();

        for (var i = 0; i < tileAsElement.length; i++) {
            tileAsElement[i].style.height = newHeight() + "px";
            tileAsElement[i].style.width = newHeight() * 1.7 + "px";
        }
    }
}

var c = -1;
Update["moveTiles"] = function () {
    if (frameCount % 50 == 0) {
        if (c < tileAsElement.length - 1) c++;
        else c = 0;

        nextTile(c);
    }
}


function addObjectsToDict(tileName) {

    var tileAsElement = document.getElementsByClassName(tileName);
    var tiles = {};
    //Creating the tile objects!!\\
    for (var i = 0; i < tileAsElement.length; i++) {
        var currTile = tileAsElement[i];
        currTile.id = !currTile.id ? "tile:" + i : currTile.id;

        //Tile values
        tiles[currTile.id] = {
                tile: currTile,
                length: currTile.getElementsByTagName("img").length,
                currTile: 0,
                height: currTile.offsetHeight
        }
        //end tile values
    }
    return tiles; 
}

//{{{{{{{{{{}}}}}}}}}}\\
function nextTile(id, tileNumb) {
    var editTile = tiles["tile:" + id];

    if (tileNumb && typeof tileNumb == 'number') {
        editTile.currTile = tileNumb;
        scrollToPos(editTile.tile, editTile.height * tileNumb, 50);
    } else {

        editTile.currTile = (editTile.currTile < editTile.length - 1 ? editTile.currTile + 1 : 0);

        scrollToPos(editTile.tile, editTile.height * editTile.currTile, 10);
    }

}
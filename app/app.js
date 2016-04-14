/**
 * Created by Samuel Beckingham-Cook on 14/04/2016.
 */

var remote = require( 'remote' );
var BrowserWindow = remote.require( 'browser-window' );

var atrament = atrament('canvas', window.innerWidth, window.innerHeight);

atrament.smoothing = false;
atrament.color = "#ff00ee";

var displayOptions = true;

// Key bindings
Mousetrap.bindGlobal('space', function(e) {
    e.preventDefault();
    if (displayOptions)
    {
        document.getElementById('window-btns').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        displayOptions = false;
    } else {
        document.getElementById('window-btns').style.display = 'block';
        document.getElementById('options').style.display = 'block';
        displayOptions = true;
    }
});


document.getElementById("close-btn").addEventListener('click', function () {
    var window = BrowserWindow.getFocusedWindow();
    window.close();
});
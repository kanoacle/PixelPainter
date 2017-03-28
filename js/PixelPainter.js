/* jshint esversion: 6 */

//creating elements
var border = document.getElementById('pixelPainter');
var colors = document.createElement('DIV');
var grid = document.createElement('DIV');
var btns = document.createElement('DIV');
var gridNum = 100;
var selected;
var colorNum = 30;
var columnsGrid = 25;
var pixelNum = 25;
var btnSel;
var erase = document.createElement('BUTTON');
var clear = document.createElement('BUTTON');
var gridBtn = document.createElement('BUTTON');
var title = document.getElementById('hdr');
var click = false;

//color selection arrays
var colorSelection = ['#000000', '#424242', '#666666', '#919191', '#c1c1c1', 'e0e0e0', '#bc0000', '#bc6a00', '#bc9c00', '#10a000', '#0007a0', '#7200a0', '#e00000', '#e08e00', '#ffd800', '#00bf16', '#1600e2', '#a100e2', '#ff2323', '#ffaa22', '#ffdc30', '#3bff14', '#1160ff', '#cb11ff', '#ff2b2b', '#ffc526', '#fffa00', '#75ff85', '#4c9fff', '#da59ff'];

//codes for border box
document.body.style.backgroundImage = 'url(./woodgrain.jpg)';
border.onload = (function() {
  border.id = 'brdr';
})();

//codes for color boxes
for (var c = 0; c < colorNum; c++) {
  var color = document.createElement('DIV');
  color.id = `color ${c}`;
  color.className = 'colors';
  color.style.backgroundColor = colorSelection[c];
  color.onclick = (function() {
    btnSel = event.srcElement;
    selected = btnSel.style.backgroundColor;
    erase.style.backgroundColor = '#fff';
    erase.style.color = 'black';
  });
  colors.appendChild(color);
}

//codes for pixel boxes
for (var c = 0; c < columnsGrid; c++) {
  var column = document.createElement('DIV');
    column.id = 'column' + c;
    column.className = 'columns';
    var i = 0;
    while (i < pixelNum) {
      var btn = document.createElement('DIV');
      btn.id = `${column.id}` + 'btn' + i;
      btn.className = 'pixels';
      btn.onmousedown = (function( event ) {
          click = true;
          btnSel = event.srcElement;
          btnSel.style.backgroundColor = selected;
      });
      btn.onmouseup = (function( event ) {
          click = false;
      });
      btn.onmouseover = (function( event ) {
          if (click === true) {
            btnSel = event.srcElement;
            btnSel.style.backgroundColor = selected;
          }
      });
      column.appendChild(btn);
      i++;
    }
  grid.appendChild(column);
}

//codes for buttons
btns.appendChild(erase);
btns.appendChild(gridBtn);
btns.appendChild(clear);

erase.id = 'ers';
erase.innerHTML = 'erase';
gridBtn.id = 'grid';
gridBtn.innerHTML = 'grid';
clear.id = 'clr';
clear.innerHTML = 'clear';

erase.onclick = (function() {
  erase.style.backgroundColor = '#333';
  erase.style.color = 'white';
  selected = 'white';
});

gridBtn.onclick = (function() {
  var pixels = document.querySelectorAll('.pixels');
    for (var i = 0; i < pixels.length; i++) {
    if (pixels[i].style.border !== '1px solid white') {
      pixels[i].style.border = '1px solid white';
    } else {
      pixels[i].style.border = '1px solid rgb(186, 186, 186)';
    }
    console.log(pixels[i].style.border);
  }
});

clear.onclick = (function() {
  var pixels = document.querySelectorAll('.pixels');
  for (var i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = 'white';
    erase.style.backgroundColor = '#fff';
    erase.style.color = 'black';
  }
});

//codes for color box
border.appendChild(colors);

colors.onload = (function() {
  colors.id = 'clrs';
})();
//codes for grid box
border.appendChild(grid);

grid.onload = (function() {
  grid.id = 'grd';
})();

//codes for button box
border.appendChild(btns);

btns.onload = (function() {
  btns.id = 'btnBox';
})();
/* jshint esversion: 6 */

//creating elements
var border = document.getElementById('pixelPainter');
var colors = document.createElement('DIV');
var grid = document.createElement('DIV');
var btns = document.createElement('DIV');
var table = document.createElement('TABLE');
var gridNum = 100;
var selected;
var columns = 25;
var pixelNum = 25;
var pixels = document.querySelectorAll('.pixels');
var btnSel;

//color selection arrays
var colorRed = ['#9b0000', 'c10000', 'dd0000', 'ff0000', 'ff6b6b', ];
var colorRed = ['', '', '', '', '', ];
var colorRed = ['', '', '', '', '', ];
var colorRed = ['', '', '', '', '', ];
var colorRed = ['', '', '', '', '', ];
var colorRed = ['', '', '', '', '', ];

//codes for border box
border.onload = (function() {
  border.style.border = '3px solid #333';
  border.style.borderRadius = '15px';
  border.style.width = '70%';
  border.style.height = '75%';
  border.style.margin = '0 auto';
  border.style.display = 'border-box';
})();

//codes for pixel boxes
for (var c = 0; c < columns; c++) {
  var column = document.createElement('DIV');
    column.id = 'column' + c;
    column.style.width = '4%';
    column.style.minHeight = '100%';
    column.style.border = '1px solid #333';
    column.style.display = 'inline-block';
    var i = 0;
    while (i < pixelNum) {
      var btn = document.createElement('DIV');
      btn.id = `${column.id}` + 'btn' + i;
      btn.className = 'pixels';
      btn.style.width = '100%';
      btn.style.height = '4%';
      btn.style.border = '1px solid #333';
      btn.style.display = 'table-col';
      btn.onclick = (function( event ) {
          btnSel = event.srcElement;
          btnSel.style.backgroundColor = selected;
      });
      column.appendChild(btn);
      i++;
    }
  grid.appendChild(column);
}

//codes for pixel coloring
colors.onclick = (function() {
  selected = colors.style.backgroundColor;
});



//codes for color box
border.appendChild(colors);

colors.onload = (function() {
  colors.style.border = '3px solid #333';
  colors.style.width = '35%';
  colors.style.height = '43%';
  colors.style.float = 'left';
  colors.style.position = 'relative';
  colors.style.left = '5%';
  colors.style.top = '7%';
  colors.style.backgroundColor = 'rgba(128, 16, 128, 0.5)';
})();
//codes for grid box
border.appendChild(grid);

grid.onload = (function() {
  grid.style.border = '3px solid #333';
  grid.style.width = '50%';
  grid.style.height = '85%';
  grid.style.position = 'relative';
  grid.style.top = '7%';
  grid.style.right = '5%';
  grid.style.float = 'right';
})();

//codes for button box
border.appendChild(btns);

btns.onload = (function() {
  btns.style.border = '3px solid #333';
  btns.style.width = '35%';
  btns.style.height = '37%';
  btns.style.float = 'left';
  btns.style.position = 'relative';
  btns.style.left = '5%';
  btns.style.top = '12%';
})();
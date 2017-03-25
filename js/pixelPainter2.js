
var selected;

//border
var border = document.getElementById('pixelPainter');

border.onload = (function() {
  border.style.border = '3px solid #333';
  border.style.borderRadius = '15px';
  border.style.width = '70%';
  border.style.height = '75%';
  border.style.margin = '0 auto';
  border.style.display = 'border-box';
})();


//Color box

colors.onload = (function() {
  colors.style.border = '3px solid #333';
  colors.style.width = '35%';
  colors.style.height = '43%';
  colors.style.float = 'left';
  colors.style.position = 'relative';
  colors.style.left = '5%';
  colors.style.top = '7%';
})();

//grid attempt for color box

color.document.write('<table>');
var gridWidth = 10;
var gridHeight = 10;
var grid = [];
for(var y = 0; y < gridHeight; y++)
{
    color.document.write('<tr>');
    grid.push([]);
    for(var x = 0; x < gridWidth; x++)
    {
        color.document.write('<td onclick="alert(\'clicked\');">');
        grid[y].push(0);
        color.document.write('</td>');
    }
    color.document.write('</tr>');
}
color.document.write('</table>');

var colors = document.createElement('DIV');
border.appendChild(colors);
//Grid box

//
grid.onload = (function() {
  grid.style.border = '3px solid #333';
  grid.style.width = '50%';
  grid.style.height = '85%';
  grid.style.position = 'relative';
  grid.style.top = '7%';
  grid.style.right = '5%';
  grid.style.float = 'right';
})();

var gridNum = 100;
var grid = document.createElement('DIV');
border.appendChild(grid);
//Button box



btns.onload = (function() {
  btns.style.border = '3px solid #333';
  btns.style.width = '35%';
  btns.style.height = '37%';
  btns.style.float = 'left';
  btns.style.position = 'relative';
  btns.style.left = '5%';
  btns.style.top = '12%';
  btns.style.backgroundColor = 'rgba(128, 20, 128, 0.25)';
})();
var btns = document.createElement('DIV');
border.appendChild(btns);
for (var i = 0; i < gridNum; i++) {
  var button = document.createElement('DIV');
}
grid.onclick('click, function');





//===================================================

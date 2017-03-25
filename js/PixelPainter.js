
//creating elements
var border = document.getElementById('pixelPainter');
var grid = document.createElement('DIV');
var colors = document.createElement('DIV');
var btns = document.createElement('DIV');
var gridNum = 100;
var selected;

//functionality
border.appendChild(grid);
border.appendChild(colors);
border.appendChild(btns);
for (var i = 0; i < gridNum; i++) {
  var button = document.createElement('DIV');
}

btns.onclick = (function() {
  selected = btns.style.backgroundColor;
});

grid.onclick = (function() {
  grid.style.backgroundColor = selected;
});

//styling
border.onload = (function() {
  border.style.border = '3px solid #333';
  border.style.borderRadius = '15px';
  border.style.width = '70%';
  border.style.height = '75%';
  border.style.margin = '0 auto';
  border.style.display = 'border-box';
})();

grid.onload = (function() {
  grid.style.border = '3px solid #333';
  grid.style.width = '50%';
  grid.style.height = '85%';
  grid.style.position = 'relative';
  grid.style.top = '7%';
  grid.style.right = '5%';
  grid.style.float = 'right';
})();

colors.onload = (function() {
  colors.style.border = '3px solid #333';
  colors.style.width = '35%';
  colors.style.height = '43%';
  colors.style.float = 'left';
  colors.style.position = 'relative';
  colors.style.left = '5%';
  colors.style.top = '7%';
})();

btns.onload = (function() {
  btns.style.border = '3px solid #333';
  btns.style.width = '35%';
  btns.style.height = '37%';
  btns.style.float = 'left';
  btns.style.position = 'relative';
  btns.style.left = '5%';
  btns.style.top = '12%';
})();
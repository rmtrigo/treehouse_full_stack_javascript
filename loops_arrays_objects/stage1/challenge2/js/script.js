var html = '';
var rgbColor;

function randomRGB() {
	Math.floor(Math.random() * 256 );
}

function randomColor() {
	var color = 'rgb(';
	for (var i = 1; i <= 3; i += 1) {
		color += randomRGB() + ',';
	}
	return color;
}

function print(message) {
	document.write(message)
}

for(var i = 1; i <= 100; i += 1) {
	rgbColor = randomColor();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);


// Create a Paper.js Path to draw a line into it:
	var path = new Path();
		// Give the stroke a color
	path.strokeColor = 'black';
	var start = new Point(0, 0);
		// Move to start and draw a line from there
	path.moveTo(start);
		// Note the plus operator on Point objects.
		// PaperScript does that for us, and much more!
	path.lineTo(start + [ 400, 400  ]);

	var myCircle = new Path.Circle(new Point(100, 70), 50);
	myCircle.fillColor = 'white';

var length = 0;
	var width = 0;
	for (var x = 0;  x< 100; x++) {
		for(var y= 0; y< 20; y++){
			new Path.Circle(new Point(width,length),10).fillColor = 'white';
			 length += 50;
		}
		length = 0;
		width += 50;
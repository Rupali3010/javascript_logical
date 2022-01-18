//! 49. Find radius of a circle

var radius, diameter, circum, area;
radius = 2;
diameter = 2 * radius;
circum = 2 * Math.PI * radius;
area = Math.PI * (radius * radius);

document.write("Diameter = " + diameter + " units<br />");
document.write("Circumference = " + circum + " units<br />");
document.write("Area = " + area + " sq. units");

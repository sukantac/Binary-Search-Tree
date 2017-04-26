var Circle = function(x, y, radius, color, id) {

    var myCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //to create a circle
    myCircle.setAttributeNS(null, "cx", x);
    myCircle.setAttributeNS(null, "cy", y);
    myCircle.setAttributeNS(null, "r", radius);
    myCircle.setAttributeNS(null, "fill", color);
    myCircle.setAttributeNS(null, "stroke", "red");
    document.getElementById(id).appendChild(myCircle);

};

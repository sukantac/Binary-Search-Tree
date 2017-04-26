        var svgNS = "http://www.w3.org/2000/svg";

        var Line = function(x1position, y1position, x2position, y2position,color,id) {

            var myLine = document.createElementNS(svgNS, 'line'); //to create a line
            myLine.setAttributeNS(null, "x1", x1position);
            myLine.setAttributeNS(null, "y1", y1position);
            myLine.setAttributeNS(null, "x2", x2position);
            myLine.setAttributeNS(null, "y2", y2position);
            myLine.setAttributeNS(null, "fill", color);
            myLine.setAttributeNS(null, "stroke", "red");

            document.getElementById(id).appendChild(myLine);
        };

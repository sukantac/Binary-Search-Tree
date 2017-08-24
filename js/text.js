   var Text = function(txtxpos, txtypos, value,txtcolor) {

       var textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text'); //To create a text
       textelement.setAttribute('dx', txtxpos - 10);
       textelement.setAttribute('dy', txtypos);
       textelement.setAttribute('dy', txtypos);
       txtnode = document.createTextNode(value);
       textelement.appendChild(txtnode);
       textelement.setAttribute('fill', txtcolor);

       document.getElementById("mySVG").appendChild(textelement);
   };

   var invText = function(txtxpos, txtypos, value) {

       var textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text'); //To create a text
       textelement.setAttribute('dx', txtxpos - 10);
       textelement.setAttribute('dy', txtypos);
       textelement.setAttribute('dy', txtypos);
       txtnode = document.createTextNode(value);
       textelement.appendChild(txtnode);
       document.getElementById("mySecondSVG").appendChild(textelement);
   };

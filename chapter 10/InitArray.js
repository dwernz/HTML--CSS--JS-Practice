// Fig. 10.4: InitArray.js
// Create two arrays, initialize their elements and display them
function start() {
    var n1 = new Array(5); // allocate five element array
    var n2 = new Array(); // allocate empty array

    // assign values to each element of array n1
    var length = n1.length;

    for (var i = 0; i < n1.length; ++i) {
        n1[i] = i;
    } // end for

    // create and initialize five elements in array n2
    for (i = 0; i < 5; ++i) {
        n2[i] = i;
    } // end for

    outputArray("Array n1:", n1, document.getElementById("output1"));
    outputArray("Array n2:", n2, document.getElementById("output2"));
} // end function start

function outputArray(heading, theArray, output) {
    var content = "<h2>" + heading + "</h2><table>" +
      "<thead><th>Index</th><th>Value</th></thead><tbody>";

    // output the index and value of each array element
    var length = theArray.length;

    for ( var i = 0; i < length; ++i )   
    {
        content += "<tr><td>" + i + "</td><td>" + theArray[ i ] + 
            "</td></tr>";
    } // end for

    content += "</tbody></table>";
    output.innerHTML = content; // place the table in the output element
} // end outputArray function

window.addEventListener("load", start, false);
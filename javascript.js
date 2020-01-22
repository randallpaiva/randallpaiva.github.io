/* Loader Effect start */

	var myVar;
	
	function myFunction() {
		myVar = setTimeout(showPage,5000);
	}
	
	function showPage() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("myDiv").style.display = "block";
	}

/* Loader Effect Ends */
	
/* Loader effect Ends */
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Test */

document.getElementById("demo").style.display="none";

/* HTML includes for html */

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

/* HTML includes for html Ends */
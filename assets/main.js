// Navbar color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


function myMap() {
  /** THE mapProp VARIABLE DEFINES THE PROPERTIES OF THE MAP. */
  const mapProp = {
    /** THE center PROPERTY SPECIFIES WHERE TO CENTRE THE MAP */
    center: new google.maps.LatLng(51.0861, 4.3663),
    /** zoom SET THE ZOOM LEVEL OF THE MAP */
    zoom: 9.5,
  };
  /** CREATES A NEW MAP INSIDE THE DIV THAT HAS THE ID  OF "map" SET
   * IT THEN CALLS THE PROPERTIES TO SEE HOW TO RENDER THE MAP */
  const map = new google.maps.Map(document.getElementById("map"), mapProp);
  /** ADD OUR MARKERS COORDINATES AND TITLE NAME OF LOCATION AND INFORMATION */
    const myMarks = [{"lat": 51.0883, "lng": 4.3820, "name": "De Schorre", "information": ` De Schorre is an vents venue in a former clay pit, 
                                                                        used for leisure activities, business conventions & festivals. This is where Tomorrowland festival takes
                                                                         place but you can go for a quided walk around the park in your spare time.`},

                  {"lat": 51.1315, "lng":4.5813, "name": "Nete", "information": `The Nete is a river in northern Belgium, right tributary of the Rupel. It flows through 
                  the Belgian province of Antwerp. It is formed in Lier, at the confluence of the rivers Grote Nete and Kleine Nete.`},

                  {"lat": 51.057555993419186, "lng": 4.342446305166104, "name": "Fort Breendonk", "information": `Fort Breendonk is a former military installation at Breendonk, near Mechelen, in Belgium which served as
                   a Nazi prison camp during the German occupation of Belgium during World War II`},

                  {"lat": 51.1385897271487, "lng": 4.364462899236603, "name": "Cleydael Castle", "information": `Crookhaven is a village in County Cork, Ireland,
                                                                     on the most southwestern tip of the island of Ireland. 
                                                                     An out-of-season population of about sixty swells in the 
                                                                     summer season to about four hundred, with the occupants of 
                                                                     the seasonal holiday homes arriving.`},
                 {"lat": 51.07880455928046 , "lng": 4.501236164832443, "name": "Fort Van Duffel", "information": ` A former WWI army railroad fortress being part of the former Antwerp Fortress belt. Where you can receive a guided tour (reservation recommended) 
                 explaining the history and current use of the fortress before heading inside to have a good eat`},
                {"lat": 51.139378146065134, "lng": 4.363397707496227, "name": "Cleydael Golf & Country Club", "information": `Cleydael Golf and Country Club is a golf club located in
                                                                         Aartselaar, Belgium and Is one of the main Golf courses in Belgium, housing an 18 hole, Par 72 course, with stunning views it is hard to not want to play a round there !`} 
];
  /* Initialize an InfoObj - this will store the information displayed in each info window */
  var InfoObj = [];
  /* LOOP OVER MyMarks - INSIDE THIS LOOP WE WILL CALL OUR MARKERS */
  for (i = 0; i < myMarks.length; i++) {
    let contentString = '<h3>' + myMarks[i].name + '</h3>' +
    '<p>' + myMarks[i].information + '</p>' ;
    /** I ADD BACK IN THE MARKER VARIABLE AS CALLING THE .OPEN METHOD ON OUR INFOWINDOW VARIABLE
     *  NEEDS A REFERENCE TO THE MAP ( SET AT THE START) AND A REFERENCE TO THE MARKER PASSED IN */
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
      map: map,
      title: myMarks[i].name,
      animation: google.maps.Animation.DROP,
    });
    /** HERE WE SETUP OUR INFO WINDOW, THIS IS WHAT WE CALL  */
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500
    });
    /** HERE WE ADD A CLICK LISTENER TO THE MARKER */
    marker.addListener("click", function () {
      /* CLOSE OTHER WINDOWS */
      closeOtherInfo();
      /* CREATE NEW WINDOW */
      infowindow.open(map, marker);
      InfoObj[0] = infowindow;
    });
  }
  /** This function clears out any old information   */
  function closeOtherInfo() {
    if( InfoObj.length > 0 ){
      InfoObj[0].set("marker", null);
      InfoObj[0].close();
      InfoObj[0].length = 0;
    }
  }
}
/** THIS IS JUST HOW I CALL THE MAP */
myMap();
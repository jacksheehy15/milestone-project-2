// Navbar color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(52.1476044919538, -10.281706619487876),
    zoom: 13.5,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapProp);
  const myMarks =  /**Places to Stay */
                  [{"lat": 52.13861454378943, "lng": -10.264066470990034, "name": "Seaview Heights", "information": `A little block of apartments located on John Street, Dingle.`},
                  {"lat": 52.14156955598052, "lng":-10.268289907588573, "name": "Dingle Benners Hotel", "information": `Dingles finest 3 star hotel, located on Main Street. A superb location for tourists !`},
                  {"lat": 52.13405592829719, "lng": -10.268530537045287 , "name": "The Dingle Skellig Hotel", "information": `Dingles most luxurious, 4 star hotel with beautiful views and incredible features.` },
                /**Places to Eat */
                {"lat": 52.138697151519935, "lng": -10.270704749087423, "name": " The Charthouse Restaurant", "information": `A stunning restaurant with a 4.8 rating on Google, it would fail to dissapoint`},
                  {"lat": 52.13952896495979, "lng":-10.275526380563534, "name": "Out Of The Blue Reastaurant", "information": `Dingles finest seafood restaurant on the edge of the waterline !`},
                  {"lat": 52.14248772133324, "lng": -10.269203735457774 , "name": "The Global Village Restaurant", "information": `Dingles most luxurious 5 star restaurant on Main Street` }
                ];

  var InfoObj = [];

  for (i = 0; i < myMarks.length; i++) {
    let contentString = '<h3>' + myMarks[i].name + '</h3>' +
    '<p>' + myMarks[i].information + '</p>'
    ;
    
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
      map: map,
      title: myMarks[i].name,
      animation: google.maps.Animation.DROP,
    });
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500
    });
    
    marker.addListener("click", function () {
      closeOtherInfo();
      infowindow.open(map, marker);
      InfoObj[0] = infowindow;
    });
  }
 
  function closeOtherInfo() {
    if( InfoObj.length > 0 ){
      InfoObj[0].set("marker", null);
      InfoObj[0].close();
      InfoObj[0].length = 0;
    }
  }
}
/**Call the map */
myMap();
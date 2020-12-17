// Navbar color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


/**Google Map */
let map;
  
  let stayLocations =  /**Places to Stay */
                  [ 
                  { coords: {"lat": 52.13861454378943, "lng": -10.264066470990034}, content: `<h4>Seaview Heights</h4> A little block of apartments located on John Street, Dingle.</p> <a href="https://www.seaviewheightsdingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.14156955598052, "lng":-10.268289907588573}, content: `<h4>Dingle Benners Hotel</h4><p>Dingles 3 star hotel, located in the middle of the town.</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.13405592829719, "lng": -10.268530537045287} ,content: `<h4>The Dingle Skellig Hotel</h4><p>Dingles most luxurious 4 star hotel, located by the coast of Dingle.</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.14125179510815, "lng":-10.286453977419042}, content: `<h4>Castlewood House</h4><p>An elegant country manor B&B, on Dingles shoreline and a quick walk to town.</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`}],

 dingleMap = [
    coords = {"lat":52.144604491953 ,"lng": -10.28170661948787},
]

                /**Places to Eat */
                let eatLocations = [
                  { coords: {"lat": 52.138697151519935, "lng": -10.270704749087423}, content: `<h4>The Chart House Restaurant</h4><p>Dingles finest resaurant known for it's fine wine!</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.13952896495979, "lng":-10.275526380563534},content: `<h4>Out of the Blue Restaurant</h4><p>Dingles most renowned seafood restaurant on the edge of the waterline.</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.14248772133324, "lng": -10.269203735457774 }, content: `<h4>The Global Village Restaurant</h4><p>Dingles must luxurious, Michellin rated restaurant.</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.139899097137814, "lng":-10.271656552146398},content: `<h4>The Anchor Down Restaurant</h4><p>A lovely seafood restaurant in the heart of Dingle town.</p> <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                ]; 
function initMap(selectedLocations) {
    let myLatlng = {
        lat: 52.1446044919538,
        lng: -10.281706619487876
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatlng,
        mapTypeId: 'satellite'
    });

    //Adjust Zoom Level for devices with smaller screens

    if (window.screen.width < 768 ) {
        var Latlng = {
            lat: 52.1446044919538,
            lng: -10.281706619487876
        };
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13.2,
            center: Latlng,
            mapTypeId: "satellite"
        })
    }



labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Iterate through the locations on the maps to place the markers on the map


if (selectedLocations)  {
    for(let i = 0; i < selectedLocations.length; i++ ) {
        console.log(`with coords: ${selectedLocations[i].coords} and just the location: ${selectedLocations[i]}`)
         marker = new google.maps.Marker({
            position: selectedLocations[i].coords,
            map,
            animation: google.maps.Animation.DROP
            
        });
         const infowindow = new google.maps.InfoWindow({
                content: selectedLocations[i].content,
            });

            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }

                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });

            var currentInfoWindow = null;
     }
    }
}
// Event Listeners for Map and Markers

document.getElementById("hotels").addEventListener("click", () => {
    initMap(stayLocations);
});
document.getElementById("restaurants").addEventListener("click", () => {
    initMap(eatLocations);
});


// Initialize the Map
 initMap();
 
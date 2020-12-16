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
                  { coords: {"lat": 52.13861454378943, "lng": -10.264066470990034}, "name": "Seaview Heights", "information": `A little block of apartments located on John Street, Dingle. <a href="https://www.seaviewheightsdingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.14156955598052, "lng":-10.268289907588573}, "name": "Dingle Benners Hotel", "information": `Dingles finest 3 star hotel, located on Main Street. A superb location for tourists ! <a href="https://www.dinglebenners.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.13405592829719, "lng": -10.268530537045287} , "name": "The Dingle Skellig Hotel", "information": `Dingles most luxurious, 4 star hotel with beautiful views and incredible features.<a href="https://www.dingleskellig.com/" target="_blank">Find Out More</a>` },
                  { coords: {"lat": 52.14125179510815, "lng":-10.286453977419042}, "name": "Castlewood House", "information": `An elegant country manor and B&B , on dingles shoreline and a quick walk to town ! <a href="https://www.castlewooddingle.com/" target="_blank">Find Out More</a>`}]
                /**Places to Eat */
                let eatLocations = [
                { coords: {"lat": 52.138697151519935, "lng": -10.270704749087423}, "name": " The Charthouse Restaurant", "information": `A stunning restaurant with a 4.8 rating on Google, it would fail to dissapoint <a href="https://thecharthousedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.13952896495979, "lng":-10.275526380563534}, "name": "Out Of The Blue Reastaurant", "information": `Dingles finest seafood restaurant on the edge of the waterline ! <a href="https://www.outoftheblue.ie/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.14248772133324, "lng": -10.269203735457774 }, "name": "The Global Village Restaurant", "information": `Dingles most luxurious 5 star restaurant on Main Street <a href="https://www.globalvillagedingle.com/" target="_blank">Find Out More</a>`},
                  { coords: {"lat": 52.139899097137814, "lng":-10.271656552146398}, "name": "The Anchor Down Restaurant", "information": `A lovely seafood restaurant in the heart of Dingle 
                  town ! <a href="https://www.tripadvisor.ie/Restaurant_Review-g211861-d8490712-Reviews-Sheehy_s_Anchor_Down_Restaurant-Dingle_Dingle_Peninsula_County_Kerry.html" target="_blank">Find Out More</a>`},
                ]; 
function initMap(selectedLocations) {
    let myLatlng = {
        lat: 52.1446044919538,
        lng: -10.281706619487876
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.7,
        center: myLatlng,
        disableDefaultUI: true,
        mapTypeId: 'satellite'
    });


    
   
console.log(selectedLocations)

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
    }
}
}
document.getElementById("hotels").addEventListener("click", () => {
    initMap(stayLocations);
});
document.getElementById("restaurants").addEventListener("click", () => {
    initMap(eatLocations);
});


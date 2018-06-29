//add your token here
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2YWoiLCJhIjoiY2pnMjFrdjYzNmJmbjJ3cW9tcWRnYTljYyJ9.D37CYWxfW1Fla7XOibo_qQ';
// var bounds = [
//         [63.735,5.644], //Southwest coordinates
//         [90.605,38.727], //Northeast coordinates
// ];
var chapters = {
    'part-1': {
        center: [82.8, 23.88],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        //bounds: [63.735,5.644], //Southwest coordinates
        //[90.605,38.727], //Northeast coordinates]
    },
    'part-2': {
        center: [77.243,28.622],
        zoom: 10.8,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [77.243,28.622],
        zoom: 10.8,
        bearing: 0,
        pitch: 0,
    },
    'part-4': {
        center: [77.243,28.622],
        zoom: 10.8,
        bearing: 0,
        pitch: 0,
    },
    'part-5': {
        center: [77.243,28.622],
        zoom: 10.8,
        bearing: 0,
        pitch: 0,
    },
    'part-6': {
        center: [77.243,28.622],
        zoom: 10.8,
        bearing: 0,
        pitch: 0,
    },
    'part-7': {
        center: [82.8, 23.88],
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/apoorvaj/cjghf1mep002s2smrfwgv4lr0', // change this to your style
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0, //direction
        pitch: 0, // angle
        // maxBounds: bounds //angle
    });

    var slider1 = document.getElementById('slider1');
    var sliderValue = document.getElementById('slider-value');


//TOGGLE BOXES, LEGEND, INFOBOX, POPUP BOX, CODE START -----------------------------------------------
//This will launch the code for the INFOBOX and the LEGEND once the map is done loading

    map.on('load', function() {

      map.addSource('seenplaces', {
          type: 'vector',
          url: 'mapbox.mapbox-streets-v7' // edit to tileset id
      });
      map.addSource('seen_total', {
          type: 'vector',
          url: 'mapbox://salonib.8kt19qwb'
      });
    //   map.addLayer({
    //     id: 'seen_total',
    //     type: 'circle',
    //     source: 'seen_total',
    //     paint: {
    //       'circle-radius': 5,
    //       'circle-color': '#2DC4B2',
    //       'circle-opacity': 0.8
    //     },'source-layer':'Mapbox_SeenTotal-3xxp5c',
    //     'filter': ['==', ['number', ['get', 'NarYear']], 1990]
    // });
    //
    //   var toggleableLayerIds = ['state-large', 'place-city-large','place-city-medium'];
    //
    //   for (var i = 0; i < toggleableLayerIds.length; i++) {
    //       var id = toggleableLayerIds[i];
    //
    //       var link = document.createElement('a');
    //       link.href = '#';
    //       link.className = 'active';
    //       link.textContent = id;
    //
    //       link.onclick = function (e) {
    //           var clickedLayer = this.textContent;
    //           e.preventDefault();
    //           e.stopPropagation();
    //
    //           var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
    //
    //           if (visibility === 'visible') {
    //               map.setLayoutProperty(clickedLayer, 'visibility', 'none');
    //               this.className = '';
    //           } else {
    //               this.className = 'active';
    //               map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    //
    //           }
    //       };
    //
    //       var layers = document.getElementById('menu');
    //       layers.appendChild(link);
    //   }

    // TOGGLE OPTION 1
  //  var toggleableLayerIds = ['SpecificPlaceSeenPP_Male', 'SpecificPlaceSeenPP_Female', 'SpecificPlaceSeenPPHull_Male', 'SpecificPlaceSeenPPHull_Female', 'AreasMentionedPP_Male', 'AreasMentionedPP_Female'];
    // var link = document.createElement('a');
    // link.href = '#';
    // // link.className = 'active';
    // link.textContent = "Male & Female";
    // link.onclick = function (e) {
    // for(var index in toggleableLayerIds) {
    //   var clickedLayer = toggleableLayerIds[index];
    //   e.preventDefault();
    //   e.stopPropagation();
    //   var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
    //   if (visibility === 'visible') {
    //       map.setLayoutProperty(clickedLayer, 'visibility', 'none');
    //       this.className = '';
    //     } else {
    //         this.className = 'active';
    //         map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    //       }
    //     }
    //   };
    //   var layers = document.getElementById('menu');
    //   layers.appendChild(link);
// Toggle layer 2
      var toggleableLayerIds2 = ['SpecificPlaceSeenPP_Male', 'SpecificPlaceSeenPPHull_Male', 'AreasMentionedPP_Male', 'DelhiBoundary'];
      var link = document.createElement('a');
      link.href = '#';
      // link.className = 'active';
      link.textContent = "Only Male";
      link.onclick = function (e) {
      for(var index in toggleableLayerIds2) {
        var clickedLayer = toggleableLayerIds2[index];
        e.preventDefault();
        e.stopPropagation();
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
          } else {
              this.className = 'active';
              map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
          }
        };
        var layers = document.getElementById('menu');
        layers.appendChild(link);
// Toggle layer 3
            var toggleableLayerIds3 = ['SpecificPlaceSeenPP_Female', 'SpecificPlaceSeenPPHull_Female', 'AreasMentionedPP_Female','DelhiBoundary'];
              var link = document.createElement('a');
              link.href = '#';
              // link.className = 'active';
              link.textContent = "Only Female";
              link.onclick = function (e) {
              for(var index in toggleableLayerIds3) {
                var clickedLayer = toggleableLayerIds3[index];
                e.preventDefault();
                e.stopPropagation();
                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    this.className = '';
                  } else {
                      this.className = 'active';
                      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                    }
                  }
                };
                var layers = document.getElementById('menu');
                layers.appendChild(link);
                // Toggle layer 4
                      var toggleableLayerIds4 = ['SpecificPlaceSeenPP_Male', 'SpecificPlaceSeenPP_Female', 'SpecificPlaceSeenPPHull_Male', 'SpecificPlaceSeenPPHull_Female','DelhiBoundary'];
                      var link = document.createElement('a');
                      link.href = '#';
                      // link.className = 'active';
                      link.textContent = "Places Seen";
                      link.onclick = function (e) {
                      for(var index in toggleableLayerIds4) {
                        var clickedLayer = toggleableLayerIds4[index];
                        e.preventDefault();
                        e.stopPropagation();
                        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                        if (visibility === 'visible') {
                            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                            this.className = '';
                          } else {
                              this.className = 'active';
                              map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                            }
                          }
                        };
                        var layers = document.getElementById('menu');
                        layers.appendChild(link);
                        // Toggle layer 5
                              var toggleableLayerId5 = ['AreasMentionedPP_Male', 'AreasMentionedPP_Female','DelhiBoundary'];
                              var link = document.createElement('a');
                              link.href = '#';
                              // link.className = 'active';
                              link.textContent = "Areas Mentioned";
                              link.onclick = function (e) {
                              for(var index in toggleableLayerId5) {
                                var clickedLayer = toggleableLayerId5[index];
                                e.preventDefault();
                                e.stopPropagation();
                                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                                if (visibility === 'visible') {
                                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                                    this.className = '';
                                  } else {
                                      this.className = 'active';
                                      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                                    }
                                  }
                                };
                                var layers = document.getElementById('menu');
                                layers.appendChild(link);




//START LEGEND CODE ===========================================================

//LEGEND TEXT
//the var layers array sets the text that will show up in the legend.
//you can enter any value here it is just text. Make sure that the Legend
//values correspond to the ones you set in Mapbox.
  var layers = ['Female','Area Seen','Area Mentioned','Male', 'Area Seen', 'Area Mentioned'];

//LEGEND COLORS
//Set the corresponding LEGEND colors using HEX the easiest way to do this is by
//setting your mapcolors in Mapbox using ColorBrewer (colorbrewer2.org). Then
//copy the exact same hex value to the array below. Remember that each label
//above should correspond to a color. If the number of items in layers does not
//match the number of values in colors you will get an error.
var FemaleAreaMentioned = "rgba(129, 192, 124, .3)";
var FemaleAreaSeen = "rgba(129, 192, 124, .8)";
var MaleAreaSeen = "rgba(175,141,195,.8)";
var MaleAreaMentioned = "rgba(175,141,195,.3)"
//FemaleAreaSeen = map.setPaintProperty(FemaleAreaSeen, 'fill-opacity', 1);

  var colors = ['',FemaleAreaSeen,FemaleAreaMentioned, '',MaleAreaSeen, MaleAreaMentioned];

//YOU DO NOT NEED TO CHANGE ANY OF THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }
//LEGEND CODE FINISHED======================================================
//---------------------------------------------------------------------------

//POPUP CODE BEGIN========================================================
//CONTEXT
//The code below creates a pop-up box when you float over an area of the mapbox
//because the popup box is pretty limited it will just contain text, but cannot
//be formatted in any special way. The popup box is good if you only want to show
//one or two data points. If you don't plan on using it comment everything out.


// var popup = new mapboxgl.Popup({
//        closeButton: false,
//        closeOnClick: false,
//
//    });

//CHANGE -------------------------------------------------------------

// map.on('mouseenter', 'AreaMentionedPP', function (e) { //REPLACE 'AreaMentionedPP' with the name of your layer.
//       map.getCanvas().style.cursor = 'pointer';

//MAKE CUSTOMIZATION
    //   var name = '<br><strong>Name: </strong>' + e.features[0].properties.Name + '</br>';
    //   var story ='<br><strong>StoryName: </strong>' + e.features[0].properties.StoryName + '</br>';
    //
    //   var descriptionarray = [name, story];
    //   var description= descriptionarray.join("");
    //
    //     popup.setLngLat(e.lngLat)
    //         .setHTML(description)
    //         .addTo(map);
    // });
    // map.on('mouseleave', 'AreaMentionedPP', function() { //REPLACE 'AreaMentionedPP' with the name of your layer.
    //     map.getCanvas().style.cursor = '';
    //     popup.remove();
    // });
//POPUP CODE END ============================================================






//START INFOBOX CODE =======================================================

//CONTEXT----------------------------------------------------------------
//The infobox is "triggered" by the mousemove function. That is, when your mouse
//moves over a certain area the function activates. It then pulls information
//from the layer in order to display it.
//The two things you will set here are the layer you are pulling information
//and the information you are going to display.

map.on('mousemove', function(e) {

//CONTEXT-------------------------------------------------
// This makes a temporary version of the layer from which we will pull data based
//on the area the mouse cursor is pointing over (e.point). So if we are hovering
//over CP it will pull up the information on CP. In order, to be able to do this
//the computer needs to know where to find this information.
//In this case, the layer is AreaMentionedPP. Just so the script grabs the most
//up to date layer please publish your project.
//Now go to mapbox figure out what layer you want info for and copy the name exactly
//and replace AreaMentionedPP.

//MAKE CHANGE-----------------------------------------------------------------
  var info = map.queryRenderedFeatures(e.point, {
   layers: ['SpecificPlaceSeenPP_Male', 'SpecificPlaceSeenPP_Female', 'SpecificPlaceSeenPPHull_Male', 'SpecificPlaceSeenPPHull_Female', 'AreasMentionedPP_Male', 'AreasMentionedPP_Female'] //REPLACE AreaMentionedPP with the Name
                                  //of your layer
    });

//CONTEXT -----------------------------------------------------------------
//The code below looks a bit overwhelming! Essentially, what we will be doing
//is telling the computer what information about what features we want to display.
//The code below produces the name of the location, the name of the story, the Quote
// and the page number.
//Since, these values are going to change depending on where I scroll I want to
//get these pieces of information based on variables and not absolute values.
//I do this by looking at the Info variable I greated earlier. Since, this variable
//contains all the values of the area my mouse is currently over, I can display whatever
//values I want: Name, NarYear, BirCntry, etc. I access these values by saying
//info[0].properties.NarYear. That is, give me the current value of the NarYear column.
//Whatever attributes are part of the layer can be accessed. So, info[0].properities.Note
//is an option if you really want to display that. So really, the only thing you
//are changing here is the value after the properities. to match with what you want to show.
//You'll also notice that there are pieces in double quotes like "Name: ".
//This is constant and Name: will always show on a scroll over. You'll note that
//this text is connected with the variable info[0].properties.Name through a
//plus sign ( + ). If computers want to add text together they need to concatenate.
//If I write "Programming " + "is " + "fun.", the output will be Programming is fun.
//Thus if you want to change the labels of the text before the variable this is
//what you change.



//MAKE CHANGE---------------------------------------------------------------
    if (info.length > 0) {
      document.getElementById('pd').innerHTML = '<h5>' + "Name: " + info[0].properties.Name + '</h5><p>' + "Story: " + info[0].properties.StoryName +" ("+ info[0].properties.NarYear +")"+'</p><p>'+ "Author Name: " + info[0].properties.AuthorName + '</p><p>'+ "Gender: " + info[0].properties.Gender +'</p>';
      //Depending on what you want to show you can add more variable and more text
      //The stub above generates the StoryName, The quote, and the page number in parenthesis.
      //in order to use it delete the following text after </h5> (';//)
    } else {
    document.getElementById('pd').innerHTML = '<p>Hover over an area</p>';
    }


  });


    slider1.addEventListener('input', function(e) {
            // Adjust the layers opacity. layer here is arbitrary - this could
            // be another layer name found in your style or a custom layer
            // added on the fly using `addSource`.
            map.setPaintProperty('AreasMentionedPP_Male', 'fill-opacity', parseInt(e.target.value, 10) / 100);
            map.setPaintProperty('AreasMentionedPP_Female', 'fill-opacity', parseInt(e.target.value, 10) / 100); //TA-Tip#1: Copy paste this line & add/remove layers as required

            // Value indicator
            sliderValue.textContent = e.target.value + '%';
        });

});
//TIME SLIDER
// document.getElementById('slider2').addEventListener('input', function(e) {
// var hour = parseInt(e.target.value);
// // update the map
// map.setFilter('seen_total', ['<=', ['number', ['get', 'NarYear']], hour]);
//
// // converting 0-23 hour to AMPM format
// //var ampm = hour >= 12 ? 'PM' : 'AM';
// var hour12 = hour
//
// // update text in the UI
// document.getElementById('active-hour').innerText = hour12 //+ ampm;
// });
}

//SLIDESHOW CODE DO NOT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

var language = "english";
var count = 0;
var latitude = 0;
var longitude = 0;
var altitudeHeight = 0;
var altitudeHeightOld = 0;
var World = {
	model : {},
	hotspots : [],
	hotspots1:[
	    {
          "id": "hs1",
          "name": "Kampong Glam",
          "nameChinese" : "甘榜格南",
          "heading": 0,
          "latitude" : 1.3024865076321281,
          "longitude" : 103.85895076336266,
          "altitude": 0,
          "landmark" : "Aliwah Art Centre",
          "relativeDistance": 15,
          "titleSize" : 0.5,
          "titleOffsetZ" : 1,
          "titleOffsetZ2" : 7.5,
          "offsetZ" : 4.15,
          "offsetZ2" : 4,
          "markerSize" : 1.2,
          "markerSize2" : 6
        },
        {
          "id": "hs2",
          "name": "Little India",
          "nameChinese" : "小印度",
          "heading": 0,
          "latitude" : 1.3079102532960165,
          "longitude" : 103.85245531360017,
          "altitude": 0,
          "landmark" : "Mustafa Centre",
          "relativeDistance": 10,
          "titleSize" : 0.5,
          "titleOffsetZ" : 1,
          "titleOffsetZ2" : 9.5,
          "offsetZ" : 1,
          "offsetZ2" : 6.5,
          "markerSize" : 1.15,
          "markerSize2" : 5
        },
        {
          "id": "hs3",
          "name": "Chinatown",
          "nameChinese" : "牛车水",
          "heading": 0,
          "latitude" : 1.2827151018763032,
          "longitude" : 103.84514003588235,
          "altitude": 0,
          "landmark": "Yueh Hai Ching Temple",
          "relativeDistance": 20,
          "titleSize" : 0.5,
          "titleOffsetZ" : 1,
          "titleOffsetZ2" : 9.75,
          "offsetZ" : 5.5,
          "offsetZ2" : 6.75,
          "markerSize" : 1.25,
          "markerSize2" : 5
        },
        {
          "id": "hs4",
          "name": "Marina Bay",
          "nameChinese" : "滨海湾",
          "heading": 0,
          "latitude" : 1.2862830506005571,
          "longitude" : 103.85706464890902,
          "altitude": 0,
          "landmark" : "Center of Marina May",
          "relativeDistance": 12,
          "titleSize" : 0.5,
          "titleOffsetZ" : 1,
          "titleOffsetZ2" : 7,
          "offsetZ" : 0,
          "offsetZ2" : 3.5,
          "markerSize" : 1,
          "markerSize2" : 6
        },
        {
          "id": "hs5",
          "name": "Gardens by the Bay",
          "nameChinese" : "滨海湾花园",
          "heading": 0,
          "latitude" : 1.2819575448900833,
          "longitude": 103.86392318912225,
          "altitude": 0,
          "landmark" : "Supertree Grove",
          "relativeDistance": 10,
          "titleSize" : 0.5,
          "titleOffsetZ" : 1,
          "titleOffsetZ2" : 7.5,
          "offsetZ" : 0,
          "offsetZ2" : 3.75,
          "markerSize" : 1.25,
          "markerSize2" : 6
        }
	],
	hotspots2:[
    	    {
              "id": "hs1",
              "name": "Kampong Glam",
              "nameChinese" : "甘榜格南",
              "heading": 0,
              "latitude" : 1.3025910146328405,
              "longitude" : 103.86114097281089,
              "altitude": 0,
              "landmark" : "Aliwah Art Centre",
              "relativeDistance": 15,
              "titleSize" : 0.5,
              "titleOffsetZ" : 1,
              "titleOffsetZ2" : 7.5,
              "offsetZ" : 4.15,
              "offsetZ2" : 4,
              "markerSize" : 1.2,
              "markerSize2" : 6
            },
            {
              "id": "hs2",
              "name": "Little India",
              "nameChinese" : "小印度",
              "heading": 0,
              "latitude" : 1.3099683509046904,
              "longitude" : 103.85542515091112,
              "altitude": 0,
              "landmark" : "Mustafa Centre",
              "relativeDistance": 10,
              "titleSize" : 0.5,
              "titleOffsetZ" : 1,
              "titleOffsetZ2" : 9.5,
              "offsetZ" : 1,
              "offsetZ2" : 6.5,
              "markerSize" : 1.15,
              "markerSize2" : 5
            },
            {
              "id": "hs3",
              "name": "Chinatown",
              "nameChinese" : "牛车水",
              "heading": 0,
              "latitude" : 1.2844198355010052,
              "longitude" : 103.8495969125526,
              "altitude": 0,
              "landmark": "Yueh Hai Ching Temple",
              "relativeDistance": 20,
              "titleSize" : 0.5,
              "titleOffsetZ" : 1,
              "titleOffsetZ2" : 9.75,
              "offsetZ" : 5.5,
              "offsetZ2" : 6.75,
              "markerSize" : 1.25,
              "markerSize2" : 5
            },
            {
              "id": "hs4",
              "name": "Marina Bay",
              "nameChinese" : "滨海湾",
              "heading": 0,
              "latitude" : 1.2849452185940224,
              "longitude" : 103.85551044314342,
              "altitude": 0,
              "landmark" : "Center of Marina May",
              "relativeDistance": 12,
              "titleSize" : 0.5,
              "titleOffsetZ" : 1,
              "titleOffsetZ2" : 7,
              "offsetZ" : 0,
              "offsetZ2" : 3.5,
              "markerSize" : 1,
              "markerSize2" : 6
            },
            {
              "id": "hs5",
              "name": "Gardens by the Bay",
              "nameChinese" : "滨海湾花园",
              "heading": 0,
              "latitude" : 1.2819575448900833,
              "longitude": 103.86392318912225,
              "altitude": 0,
              "landmark" : "Supertree Grove",
              "relativeDistance": 10,
              "titleSize" : 0.5,
              "titleOffsetZ" : 1,
              "titleOffsetZ2" : 7.5,
              "offsetZ" : 0,
              "offsetZ2" : 3.75,
              "markerSize" : 1.25,
              "markerSize2" : 6
            }
    	],
    markerList : [],
    isLoaded: false,
    heading: 0,
    pressure: 0,
    animations: [],
    markerImageResource: {},
    markerImageDrawableList : [],
    markerTitleLabelList : [],
    isGeoMode : false,
    initGeoMode : function initFn() {
        toastText("GPS Location based POI ~", 5000, "success");
        console.log("altitude height: ", altitudeHeight);
        if(altitudeHeight > 130){
            World.hotspots = World.hotspots2;
            console.log("Set to hotspots2");
        }else{
            World.hotspots = World.hotspots1;
            console.log("Set to hotspots1");
        }
        World.markerImageDrawableList = [];
        World.markerTitleLabelList = [];
        World.markerList = [];
        World.markerImageResource = new AR.ImageResource("assets/pin_normal3.png", {});
        for (var i = 0; i < World.hotspots.length; i++) {
            var markerLocation = new AR.GeoLocation(World.hotspots[i].latitude, World.hotspots[i].longitude, World.hotspots[i].altitude);
            var markerImageDrawable = new AR.ImageDrawable(World.markerImageResource, World.hotspots[i].markerSize2, {
                zOrder: i,
                translate: {
                    y: World.hotspots[i].offsetZ2
                },
                opacity: 1.0,
                onClick: function () {
                    console.log("openContent: " + World.hotspots[this.zOrder].id);
                    World.openContent(World.hotspots[this.zOrder].id, World.hotspots[this.zOrder].name);
                    //World.markerList[this.zOrder].locations[0].altitude -= 10;
                    console.log("New Altitude: ", World.markerList[this.zOrder].locations[0].altitude);
                }
            });
            World.markerImageDrawableList.push(markerImageDrawable);
            var titleName = "";
            if(language == "english"){
                titleName = World.hotspots[i].name;
            }else if(language == "chinese"){
                titleName = World.hotspots[i].nameChinese;
            }
            var distance = markerLocation.distanceToUser()/1000;
            var titleLabel = new AR.Label("  *"+ titleName +"(" + distance.toFixed(2) +"km)", 1, {
                    zOrder: 0,
                    translate: {
                        y: World.hotspots[i].titleOffsetZ2
                    },
                    style: {
                        opacity: 1,
                        textColor: '#FFFFFF',
                        fontStyle: AR.CONST.FONT_STYLE.BOLD
                    }
                });
            World.markerTitleLabelList.push(titleLabel);
            var markerGeoObject = new AR.GeoObject(markerLocation, {
                drawables: {
                    cam: [markerImageDrawable, titleLabel]
                }
            });
            World.markerList.push(markerGeoObject);

            console.log(i + ":: " + World.hotspots[i].name +" | "+ World.hotspots[i].latitude + ", " + World.hotspots[i].longitude, " (" + markerLocation.distanceToUser() +"m)");
		}
    },
    initRelativeMode : function initFn() {
            toastText("Compass heading based POI ~", 5000, "success");
            World.markerImageDrawableList = [];
            World.markerTitleLabelList = [];
            World.markerList = [];
            World.markerImageResource = new AR.ImageResource("assets/location256_short.png", {});
            for (var i = 0; i < World.hotspots.length; i++) {
                var bearing = getBearing(latitude, longitude, World.hotspots[i].latitude, World.hotspots[i].longitude);
                console.log(World.hotspots[i].name+ ">>> Bearing: "+ bearing);
                var northing = Math.cos(toRadians(bearing)) * World.hotspots[i].relativeDistance;
                //var northing = Math.cos(toRadians(World.hotspots[i].heading)) * World.hotspots[i].relativeDistance;
                //var easting = Math.sin(toRadians(World.hotspots[i].heading)) * World.hotspots[i].relativeDistance;

                var easting = Math.sin(toRadians(bearing)) * World.hotspots[i].relativeDistance;
                var markerLocation = new AR.RelativeLocation(null, northing, easting, World.hotspots[i].offsetZ);
                var markerImageDrawable = new AR.ImageDrawable(World.markerImageResource, World.hotspots[i].markerSize, {
                    zOrder: i,
                    opacity: 1.0,
                    onClick: function () {
                        console.log("openContent: " + World.hotspots[this.zOrder].id);
                        World.openContent(World.hotspots[this.zOrder].id, World.hotspots[this.zOrder].name);
                    }
                });
                World.markerImageDrawableList.push(markerImageDrawable);
                var titleName = "";
                if(language == "english"){
                    titleName = World.hotspots[i].name;
                }else if(language == "chinese"){
                    titleName = World.hotspots[i].nameChinese;
                }
                var titleLabel = new AR.Label("*"+ titleName +" (" + bearing.toFixed(0) + "deg)", World.hotspots[i].titleSize, {
                //var titleLabel = new AR.Label("*"+ titleName, World.hotspots[i].titleSize, {
                        zOrder: 1,
                        translate: {
                            y: World.hotspots[i].titleOffsetZ
                        },
                        style: {
                            opacity: 1,
                            textColor: '#FFB800',
                            fontStyle: AR.CONST.FONT_STYLE.BOLD
                        }
                    });
                World.markerTitleLabelList.push(titleLabel);
                var markerGeoObject = new AR.GeoObject(markerLocation, {
                    drawables: {
                        cam: [markerImageDrawable, titleLabel]
                    }
                });
                World.markerList.push(markerGeoObject);
                //console.log(i + ": Add new marker :" + World.hotspots[i].name);
    		}
        },
    toggleLanguage : function toggleLanguageFn() {
        for (var i = 0; i < World.hotspots.length; i++) {
            if(language == "english"){
                titleName = World.hotspots[i].name;
            }else if(language == "chinese"){
                titleName = World.hotspots[i].nameChinese;
            }
            World.markerTitleLabelList[i].text = titleName;
        }
    },
	openContent : function openContentFn(_id, _name) {
        var jsonData = {
            action : "open_content",
            id : _id,
            name: _name
        };
        AR.platform.sendJSONObject(jsonData);
    },
	exitScreen : function exitScreenFn() {
        var exitScreenJSON = {
            action : "exit"
        };
        AR.platform.sendJSONObject(exitScreenJSON);
    },
	toggleRotation : function toggleRotationFn() {
		if (World.rotationAnimation.isRunning()) {
			World.rotationAnimation.pause();
		} else {
			World.rotationAnimation.resume();
		}
		return false;
	},
	setHeading : function setHeadingFn(val) {
		console.log("Device heading (deg): ", val);
		World.heading = val;	
		//World.init();
	},
	setPressure : function setPressureFn(val) {
        console.log("Device pressure (hPa): ", val);
        World.pressure = val;
        //World.init();
    },
    getPressure : function getPressureFn() {
        var jsonData = {
            action : "get_pressure"
        };
        AR.platform.sendJSONObject(jsonData);
    },
    setLanguage : function setLanguageFn(val) {
    	console.log("Set language: ", val);
        language = val;
        if(!World.isLoaded){
            World.isLoaded = true;
        }else{
            World.toggleLanguage();
        }
    },
    toggleGeoMode : function toggleGeoModeFn() {
        AR.context.destroyAll();
        console.log("Is GeoMode: ", World.isGeoMode);
        if(World.isGeoMode){
            World.initRelativeMode();
            World.isGeoMode = false;
        }else{
            World.initGeoMode();
            World.isGeoMode = true;
        }
        var elm = $("#btn-mode img");
        var src = (elm.attr('src') === 'assets/mode0.png') ? 'assets/mode1.png' : 'assets/mode0.png';
        elm.attr('src', src)
    }
};
// Converts from degrees to radians.
function toRadians(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
function toDegrees(radians) {
  return radians * 180 / Math.PI;
}

function getBearing(startLat, startLng, destLat, destLng){
  let startLatRad = toRadians(startLat);
  let startLngRad = toRadians(startLng);
  let destLatRad = toRadians(destLat);
  let destLngRad = toRadians(destLng);

  let y = Math.sin(destLngRad - startLngRad) * Math.cos(destLatRad);
  let x = Math.cos(startLatRad) * Math.sin(destLatRad) -
        Math.sin(startLatRad) * Math.cos(destLatRad) * Math.cos(destLngRad - startLngRad);
  var bearing = Math.atan2(y, x);
  bearing = toDegrees(bearing);
  return (bearing + 360) % 360;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
}
function toastText(msg, timeOut, type) {
    toastr.clear();	
	toastr.options = {
		"positionClass" : "toast-bottom-center",
		"preventDuplicates" : true,
		"timeOut" : timeOut,
		"progressBar": true,
		"extendedTimeOut" : 1000		
	}
	if(type === "success"){
	    toastr.success(msg);
	}else if(type === "info"){
	    toastr.info(msg);
	}else if(type === "warning"){
        toastr.warning(msg);
    }
}
document.getElementById('btn-snapshot').style.display = "none";
document.getElementById('btn-continue').style.display = "none";
document.getElementById('hashtag').style.display = "block";

setTimeout(function () {
  AR.platform.sendJSONObject({
    action : "get_language"
});
}, 1000);
var isLocationSet = false;
AR.context.onLocationChanged = function(lat, lon, altitude, accuracy){
    //update by native app, add custom functionality to build the AR scene based on the location
    console.log("onLocationChanged: altitude: ", altitude);

    latitude = lat;
    longitude = lon;
    if(World.pressure > 0){
        altitudeHeight = getAltitudeFromPressure(World.pressure);
    }

    document.getElementById("hashtag").innerHTML = count + ": (" + latitude + ", " + longitude + ")(" + World.pressure.toFixed(2) + "hPa)("
            + altitudeHeight.toFixed(2) +"m) Ascending? "+ isAscending;
    count++;
    if(!isLocationSet && World.pressure > 0){
          World.initGeoMode();
          World.isGeoMode = true;
          isLocationSet = true;
    }
}

function getAltitudeFromPressure(pressure) {
        //in hPa unit
    return (9324.6 - (9.2534 * pressure));
}
var isAscending = "No";
var isWaiting = false;

setInterval(function () {
    console.log("Is Ascending? ", altitudeHeightOld + "|" + altitudeHeight);
    if(altitudeHeightOld != altitudeHeight){
        var delta = altitudeHeight - altitudeHeightOld;
            if(delta > 0){
                isAscending = "Yes";
            }else{
                isAscending = "No";
            }
        console.log("Is Ascending: ", isAscending);
    }
    altitudeHeightOld = altitudeHeight;
}, 10000);

toastText("Determine your location ~", 5000, "warning");

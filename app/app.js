var window = Ti.UI.createWindow({
	backgroundColor:'#FFF'
});


var TiBeacons = require('de.lbi.beaconLocator');

// Alloy.Collections.iBeacon.fetch();


function enterRegion(e) {
	var model = ensureModel(e);
	TiBeacons.startRangingForBeacons(e);
}


function exitRegion(e) {
	alert(e);
	var model = ensureModel(e);
	Alloy.Collections.iBeacon.remove(model);
    TiBeacons.stopRangingForBeacons(e);
}


function updateRanges(e) {
	Ti.API.trace(e);
}

//handle beacon events 

function handleProximity(e) {
	Ti.API.info(e);
	
	var model = ensureModel(e);	
	model.set("proximity", e.proximity);

	if((e.proximity == 'near')&&(e.identifier == 'Estimote 1')){	
	
	}

	if((e.proximity == 'near')&&(e.identifier == 'Estimote 2')){	
	
	}

	if((e.proximity == 'near')&&(e.identifier == 'Estimote 3')){	
	
				
	}
		
	if((e.proximity == 'near')&&(e.identifier == 'Estimote 4')){	
	
				
	}

	

}


function ensureModel(e) {	
	var atts = {
		id: e.uuid+" "+e.major+" "+e.minor,
		identifier: e.identifier,
		uuid: e.uuid,
		major: parseInt(e.major),
		minor: parseInt(e.minor),
		proximity: e.proximity
	};
	
	var model;
	var models = Alloy.Collections.iBeacon.where({id:atts.id});
	
	if (models.length == 0) {
		model = Alloy.createModel("iBeacon", atts);
		Alloy.Collections.iBeacon.add(model);
	}
	else {
		model = models[0];
	}
	return model;
}


TiBeacons.addEventListener("enteredRegion", enterRegion);
TiBeacons.addEventListener("exitedRegion", exitRegion);
TiBeacons.addEventListener("beaconRanges", updateRanges);
TiBeacons.addEventListener("beaconProximity", handleProximity);
	
	
	
// create viewds 	
	
	
	
TiBeacons.startRangingForBeacons ({
	    uuid : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
	    identifier : "Estimote 1",
	    major : "65185",
	    minor : "25294"
	});
	
	
		
		
var window = Ti.UI.createWindow({
	backgroundColor:'#FFF'
});


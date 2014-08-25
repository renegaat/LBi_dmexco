var TiBeacons = require('de.lbi.beaconlocator');

Alloy.Collections.iBeacon.fetch();

function enterRegion(e) {
	alert(e);
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
function handleProximity(e) {
	Ti.API.info(e);
	
	var model = ensureModel(e);
	
	model.set("proximity", e.proximity);
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
Ti.API.info("found model "+models[0].get("identifier"));	
	}

	return model;
}


TiBeacons.addEventListener("enteredRegion", enterRegion);
TiBeacons.addEventListener("exitedRegion", exitRegion);

TiBeacons.addEventListener("beaconRanges", updateRanges);
TiBeacons.addEventListener("beaconProximity", handleProximity);
	

function toggleAdvertising() {

}

function toggleMonitoring() {

    if ($.monitoringSwitch.value) {
        TiBeacons.startMonitoringForRegion({
            uuid : "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
            identifier : "Estimote"
        });

    } else {
		TiBeacons.stopMonitoringAllRegions();
    }
}


$.win.open();

mainApp.service('sUrlsService', function() {
	
	// actual shorten url
	var shortenGoogle;
	var shortenHexu;
	var shortenLnkSuite;
	
	// shorten url ids
	var googleID;
	var hexuID;
	var lnkSuiteID;
	
	var setGoogleID(sUrlID){
		googleID = sUrlID;
	};
	
	var setHexuID(sUrlID){
		hexuID = sUrlID;
	};
	
	var setLnkSuiteID(sUrlID){
		lnkSuiteID = sUrlID;
	};
	
	var getGoogleID(){
		return googleID;
	};
	
	var getHexuID(){
		return hexuID;
	};
	
	var getLnkSuiteID(){
		return lnkSuiteID;
	};
	
	var setShortGoogle(sUrl){
		shortenGoogle = sUrl;
	};
	
	var setShortHexu(sUrl){
		shortenHexu = sUrl;
	};
	
	var setLnkSuite(sUrl){
		shortenLnkSuite = sUrl;
	};
	
	var getShortGoogle(){
		return shortenGoogle;
	};
	
	var getShortHexu(){
		return shortenHexu;
	};
	
	var getLnkSuite(){
		return shortenLnkSuite;
	};
	
	return {
		setShortGoogle: setShortGoogle,
		setShortHexu: setShortHexu,
		setLnkSuite: setLnkSuite,
		getShortGoogle: getShortGoogle,
		getShortHexu: getShortHexu,
		getLnkSuite: getLnkSuite,
		setGoogleID: setGoogleID,
		setHexuID: setHexuID,
		setLnkSuiteID: setLnkSuiteID,
		getGoogleID: getGoogleID,
		getHexuID: getHexuID,
		getLnkSuiteID: getLnkSuiteID
	};
});
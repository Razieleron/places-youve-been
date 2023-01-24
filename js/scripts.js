 // Business Logic 
function Atlas() {
  this.places = {}
} 

Atlas.prototype.addPlace = function(place) {
  this.places[place.placeName] = place;
}

//this.places {america.placeName} = america 

// Business Logic for Places
function Place(placeName, countryName, cityName, languageSpoken, landmarkName, timeOfYear, transportationMethod) {
  this.placeName = placeName;
  this.countryName = countryName;
  this.cityName = cityName;
  this.languageSpoken = languageSpoken;
  this.landmarkName = landmarkName;
  this.timeOfYear = timeOfYear;
  this.transportationMethod = transportationMethod;
}

Place.prototype.location = function() {
  return this.cityName + ", " + this.countryName;
}

Place.prototype.countryNameChange = function(method) {
  this.countryName = method;
}

Place.prototype.transportationChange = function(method) {
  this.transportationMethod = method;
}





Place.prototype.languageToVisit = function(language) {
  if (this.languageSpoken = language) {
    return "you can visit " + this.cityName + ", " + this.countryName + " without fear!"
  }
  return "don't visit" + this.cityName + ", " + this.countryName + " yet!"
}
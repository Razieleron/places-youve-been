 // Business Logic 
function Map() {
  this.places = {}
} 

function Place(placeName, countryName, cityName, languageSpoken, landmarkName, timeOfYear, transportationMethod) {
  this.placeName = placeName;
  this.countryName = countryName;
  this.cityName = cityName;
  this.languageSpoken = languageSpoken;
  this.landmarkName = landmarkName;
  this.timeOfYear = timeOfYear;
  this.transportationMethod = transportationMethod
}


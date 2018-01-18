var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var theTable = document.getElementById('patsSalesTable');
var theForm = document.getElementById('sales-form');

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale}) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  CookieStand.allStores.push(this);
}

CookieStand.allStores = [];

CookieStand.prototype.calcCustomersEachHour = function() {

  for (var i in hours) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
}

CookieStand.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for(var i in hours) {
    var oneHour = Math.floor(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesPerHour.push(oneHour); 
    this.totalDailyCookies += oneHour;
  }
}

CookieStand.prototype.render = function () {
  this.calcCookiesEachHour(); 

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationName; 
  trEl.appendChild(tdEl);

  for(var i in hours) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

function random(min, max) {
  return Math.floor(math.random() * (max - min + 1)) + min;
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('thEl');
  thEl.textContent = 'Hourly Totals for All Stores';
  trEl.appendChild(thEl);

  for(var i in hours) {
    var hourlyTotal = 0;

    for(var j in CookieStand.allStores) {
      hourlyTotal += CookieStand.allStores[j].cookiesPerHour[i];

    }
    thEl.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild('thEl');

  }
  
  theTable.appendChild(trEl);
}





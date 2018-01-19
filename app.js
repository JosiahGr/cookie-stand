'use strict';
var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookieTable = document.getElementById('patsSalesTable');
var salesForm = document.getElementById('sales-form');

function CookieStand(store, maxCust, minCust, avgCookieSold) {
  this.store = store;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookieSold = avgCookieSold;
  this.customersEachHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  CookieStand.allStores.push(this);
}

CookieStand.allStores = [];

CookieStand.prototype.calcCustomersPerHour = function () {
  for(var i in timeOfDay) {
    this.customersEachHour.push(random(this.minCust, this.maxCust));
  }
};

CookieStand.prototype.calcCookiesEachHour = function () {
  this.calcCustomersPerHour();
  for(var i in timeOfDay) {
    var oneHour = Math.floor(this.customersEachHour[i] * this.avgCookieSold);
    this.cookiesPerHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookieStand.prototype.render = function () {
  this.calcCookiesEachHour();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  for(var i in timeOfDay) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
};

function makeHeaderRow (head) {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Location';
  trEl.appendChild(thEl);
  
  for(var i = 0; i < timeOfDay.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = head[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Sales: ';
  trEl.appendChild(thEl);

  for(var i in timeOfDay) {
    var hourlyTotal = 0;

    for(var j in CookieStand.allStores) {
      hourlyTotal += CookieStand.allStores[j].cookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }
  cookieTable.appendChild(trEl);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderAllStores() {
  makeHeaderRow(timeOfDay);
  for(var i in CookieStand.allStores) {
    CookieStand.allStores[i].render();
  }
  makeFooterRow();
}

function addNewStore(event) {
  event.preventDefault();
  console.log(event.target.store.value);
  var newStore = event.target.store.value;
  var newMaxCust = event.target.maxCust.value;
  var newMinCust = event.target.minCust.value;
  var newAvgCookieSold = event.target.avgCookieSold.value;

  new CookieStand(newStore, newMaxCust, newMinCust, newAvgCookieSold);

  cookieTable.innerHTML = '';
  renderAllStores();
}

salesForm.addEventListener('submit', addNewStore);

new CookieStand('1st & Pike', 100, 25, 6.3);
new CookieStand('Seatac Airport', 24, 3, 1.2);
new CookieStand('Seattle Center', 38, 11, 3.7);
new CookieStand('Capital Hill', 38, 20, 2.3);
new CookieStand('Alki', 16, 2, 4.6);

renderAllStores();
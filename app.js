'use strict';
var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookieTable = document.getElementById('patsSalesTable');
var salesForm = document.getElementById('sales-form');

var totalCookies = [];


function CookieStand(store, maxCust, minCust, cookieSold) {
  this.store = store;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.cookieSold = cookieSold;
  this.customersEachHour = [];
  this.cookiesPerHour = [];
  this.getEstimate = function() {
    var cookies = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.round(cookies);
    return cookies;
  };
  totalCookies.push(this);
}

CookieStand.allStores = [];


CookieStand.prototype.render = function () {
  var totalCookiesSold = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  for(var i = 0; i < timeOfDay.length; i++) {
    var cookiesSold = this.getEstimate();
    tdEl = document.createElement('td');
    tdEl.textContent = cookiesSold;
    trEl.appendChild(tdEl);
    totalCookiesSold += cookiesSold;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalCookiesSold;
  trEl.appendChild(tdEl);
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

function renderAllStores() {
  makeHeaderRow(timeOfDay);
  for(var i in totalCookies) {
    totalCookies[i].render();
  }
  makeFooterRow(totalCookies);
}

function makeFooterRow (foot) {
  var allOfTheCookies = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Sales Total';
  trEl.appendChild(tdEl);

  for(var i = 0; i < timeOfDay.length; i++) {
    for(var b = 0; b < totalCookies[b].length; b++) {
      var cookieHour = 0;
      cookieHour += totalCookies;
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = cookieHour;
    }
    tdEl = document.createElement('td');
    tdEl.textContent = allOfTheCookies;
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);
  }
}

function addNewStore(event) {
  event.preventDefault();
  console.log(event.target.store.value);
  var newStore = event.target.store.value;
  var newMaxCust = event.target.maxCust.value;
  var newMinCust = event.target.minCust.value;
  var newCookieSold = event.target.cookieSold.value;

  new CookieStore(newStore, newMaxCust, newMinCust, newCookieSold);

  cookieTable.innerHTML = '';
  renderAllStores();
}

new CookieStore('1st & Pike', 100, 25, 6.3);
new CookieStore('Seatac Airport', 24, 3, 1.2);
new CookieStore('Seattle Center', 38, 11, 3.7);
new CookieStore('Capital Hill', 38, 20, 2.3);
new CookieStore('Alki', 16, 2, 4.6);

salesForm.addEventListener('submit', addNewStore);

renderAllStores();
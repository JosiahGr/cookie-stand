'use strict';
var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookiesSold = [];

var cookieTable = document.getElementById('patsSalesTable');

function CookieStore(store, maxCust, minCust, cookieSold) {
  this.store = store;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.cookieSold = cookieSold;
  this.getEstimate = function() {
    var cookies = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  };
  cookiesSold.push(this);
}

CookieStore.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.maxCust;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.minCust;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookieSold;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};

var pike = new CookieStore('Seattle', 100, 25, 6.3);
var seaTac = new CookieStore('Seatac Airport', 24, 3, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 38, 11, 3.7);
var capHill = new CookieStore('Capital Hill', 38, 20, 2.3);
var alki = new CookieStore('Alki', 16, 2, 4.6);

pike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();


// function makeHeaderRow() {
//   var trEl = document.createElement('tr');

//   var thEl = document.createElement('th');
//   thEl.textContent = 'Location';
//   trEl.appendChild(thEl);

//   cookieTable.appendChild(trEl);
// }

//   render: function() {
//     cookiesSold = 0;
//     salesAlki.getEstimate();
//     var ulEl = document.getElementById('Alki');

//     for(var i = 0; i < timeOfDay.length; i++) {

//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.getEstimate() + ' Cookies Sold.';
//       cookiesSold = cookiesSold + this.getEstimate();
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total of ' + cookiesSold + ' sold at location.';
//     ulEl.appendChild(liEl);
//   }
// };


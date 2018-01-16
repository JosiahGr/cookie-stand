'use strict';
// var timeOfDay = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];


var allCookies = [];

var cookieTable = document.getElementById('patsSalesTable');

function CookieSales(storeLocation, sixAm, sevenAm, eightAm, nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, sales) {
  this.storeLocation = storeLocation;
  this.sixAm = sixAm;
  this.sevenAm = sevenAm;
  this.eightAm = eightAm;
  this.nineAm = nineAm;
  this.tenAm = tenAm;
  this.elevenAm = elevenAm;
  this.twelvePm = twelvePm;
  this.onePm = onePm;
  this.twoPm = twoPm;
  this.threePm = threePm;
  this.fourPm = fourPm;
  this.fivePm = fivePm;
  this.sixPm = sixPm;
  this.sevenPm = sevenPm;
  this.sales = sales;
  allCookies.push(this);
}

CookieSales.prototype.render = function () {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeLocation;
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.sixAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.sevenAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.eightAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.nineAm;
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.tenAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.elevenAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.twelvePm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.onePm;
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.twoPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.threePm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.fourPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.fivePm;
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.sixPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.sevenPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.sales;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '6am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '7am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '8am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '9am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '10am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '11am';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '12pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '1pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '2pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '3pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '4pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '5pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '6pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = '7pm';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);
}


var seattle = new CookieSales('Seattle', 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 18000);


makeHeaderRow();
seattle.render();
















// // Store 1
// function mathPike() {
//   var randomNum = Math.random() * (100 - 25) + 25;
//   randomNum *= 6.3;
//   randomNum = Math.floor(randomNum);
//   return (randomNum);
// }
// var salesPike = {
//   cookiesSold: [mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(), mathPike(),],

//   render: function() {
//     var ulEl = document.getElementById('1stPike');

//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.';
//       console.log('1st & Pike: ' + timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.');
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// salesPike.render();

// // Store 2

// function mathSeatac() {
//   var randomNum = Math.random() * (24 - 3) + 3;
//   randomNum *= 1.2;
//   randomNum = Math.floor(randomNum);
//   return (randomNum);
// }

// var salesSeatac = {
//   cookiesSold: [mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac(), mathSeatac()],

//   render: function() {
//     var ulEl = document.getElementById('Seatac');

//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.';
//       console.log('Seatac Airport: ' + timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.');
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesSeatac.render();

// // Store 3

// function mathSeattleCenter() {
//   var randomNum = Math.random() * (38 - 11) + 11;
//   randomNum *= 3.7;
//   randomNum = Math.floor(randomNum);
//   return (randomNum);
// }

// var salesSeattleCenter = {
//   cookiesSold: [mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter(), mathSeattleCenter()],

//   render: function() {
//     var ulEl = document.getElementById('SeattleCenter');

//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.';
//       console.log('Seattle Center: ' + timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.');
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesSeattleCenter.render();


// function mathCapHill() {
//   var randomNum = Math.random() * (38 - 20) + 20;
//   randomNum *= 2.3;
//   randomNum = Math.floor(randomNum);
//   return (randomNum);
// }

// var salesCapHill = {
//   cookiesSold: [mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill(), mathCapHill()],

//   render: function() {
//     var ulEl = document.getElementById('CapHill');

//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.';
//       console.log('Capitol Hill: ' + timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.');
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesCapHill.render();


// function mathAlki() {
//   var randomNum = Math.random() * (16 - 2) + 2;
//   randomNum *= 4.6;
//   randomNum = Math.floor(randomNum);
//   return (randomNum);
// }

// var salesAlki = {
//   cookiesSold: [mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki(), mathAlki()],

//   render: function() {
//     var ulEl = document.getElementById('Alki');

//     for(var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.';
//       console.log('Alki: ' + timeOfDay[i] + ': ' + this.cookiesSold[i] + ' Cookies Sold.');
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesAlki.render();

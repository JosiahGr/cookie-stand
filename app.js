'use strict';
var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookiesSold = [];

var salesPike = {
  maxCust: 100,
  minCust: 25,
  cookieSold: 6.3,
  getEstimate: function() {
    var cookies = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  },

  render: function() {
    cookiesSold = 0;
    salesPike.getEstimate();
    var ulEl = document.getElementById('1stPike');

    for(var i = 0; i < timeOfDay.length; i++) {

      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.getEstimate() + ' Cookies Sold.';
      cookiesSold += this.getEstimate;
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total of' + cookiesSold + ' sold at location.';
    ulEl.appendChild(liEl);
  }
};

salesPike.render();


// var cookieMath = cookieQuote.getEstimate();

// function mathPike() {
//   var randomNum = Math.random() * (100 - 25) + 25;
//   randomNum * 6.3;
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
//       ulEl.appendChild(liEl);
//     }
//   }
// };



// salesPike.render();

// // Store 2

// function mathSeatac() {
//   var randomNum = Math.random() * (24 - 3) + 3;
//   randomNum * 1.2;
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
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesSeatac.render();

// // Store 3

// function mathSeattleCenter() {
//   var randomNum = Math.random() * (38 - 11) + 11;
//   randomNum * 3.7;
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
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesSeattleCenter.render();


// function mathCapHill() {
//   var randomNum = Math.random() * (38 - 20) + 20;
//   randomNum * 2.3;
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
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesCapHill.render();


// function mathAlki() {
//   var randomNum = Math.random() * (16 - 2) + 2;
//   randomNum * 4.6;
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
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// salesAlki.render();

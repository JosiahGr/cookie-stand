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
      cookiesSold = cookiesSold + this.getEstimate();
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total of ' + cookiesSold + ' sold at location.';
    ulEl.appendChild(liEl);
  }
};

var salesSeatac = {
  maxCust: 24,
  minCust: 3,
  cookieSold: 1.2,
  getEstimate: function() {
    var cookies = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  },

  render: function() {
    cookiesSold = 0;
    salesSeatac.getEstimate();
    var ulEl = document.getElementById('Seatac');

    for(var i = 0; i < timeOfDay.length; i++) {

      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.getEstimate() + ' Cookies Sold.';
      cookiesSold = cookiesSold + this.getEstimate();
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total of ' + cookiesSold + ' sold at location.';
    ulEl.appendChild(liEl);
  }
};

var salesSeattleCenter = {
  maxCust: 38,
  minCust: 11,
  cookieSold: 3.7,
  getEstimate: function() {
    var cookies = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  },

  render: function() {
    cookiesSold = 0;
    salesSeattleCenter.getEstimate();
    var ulEl = document.getElementById('SeattleCenter');

    for(var i = 0; i < timeOfDay.length; i++) {

      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.getEstimate() + ' Cookies Sold.';
      cookiesSold = cookiesSold + this.getEstimate();
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total of ' + cookiesSold + ' sold at location.';
    ulEl.appendChild(liEl);
  }
};

var salesCapHill = {
  maxCust: 38,
  minCust: 20,
  cookieSold: 2.3,
  getEstimate: function() {
    var cookies = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  },

  render: function() {
    cookiesSold = 0;
    salesCapHill.getEstimate();
    var ulEl = document.getElementById('CapHill');

    for(var i = 0; i < timeOfDay.length; i++) {

      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.getEstimate() + ' Cookies Sold.';
      cookiesSold = cookiesSold + this.getEstimate();
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total of ' + cookiesSold + ' sold at location.';
    ulEl.appendChild(liEl);
  }
};

var salesAlki = {
  maxCust: 38,
  minCust: 11,
  cookieSold: 3.7,
  getEstimate: function() {
    var cookies = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  },

  render: function() {
    cookiesSold = 0;
    salesAlki.getEstimate();
    var ulEl = document.getElementById('Alki');

    for(var i = 0; i < timeOfDay.length; i++) {

      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + this.getEstimate() + ' Cookies Sold.';
      cookiesSold = cookiesSold + this.getEstimate();
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total of ' + cookiesSold + ' sold at location.';
    ulEl.appendChild(liEl);
  }
};

salesPike.render();
salesSeatac.render();
salesSeattleCenter.render();
salesCapHill.render();
salesAlki.render();


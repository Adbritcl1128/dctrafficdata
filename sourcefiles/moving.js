let moving = require ('./parse.js')

let trafficData = moving('./datafiles/traffic-data/simple_data/parking_feb_2016.csv');

let ticketType = {};

trafficData.forEach(function(item) {
  if (!ticketType[item[17]]) {
    ticketType[item[17]] = 1;
  } else {
    ticketType[item[17]] = ticketType[item[17]] + 1;
  }

  console.log(Object.keys(ticketType));



});

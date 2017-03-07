let parking = require ('./parse.js');



let trafficData = parking('./datafiles/traffic-data/simple_data/moving_jan_2016.csv');

let ticketType = {};


trafficData.forEach(function(item) {

  if (!ticketType[item[17]]) {
    ticketType[item[17]] = 1;
  } else {
    ticketType[item[17]] = ticketType[item[17]] + 1;
  }

  console.log(Object.keys(ticketType));

  if (!ticketType[item[10]]) {
    ticketType[item[10]] = 1;
  } else {
    ticketType[item[10]] = ticketType[item[10]] + 1;
  }
  console.log(Object.keys(ticketType));

  if (!ticketType[item[4]]) {
    ticketType[item[4]] = 1;
  } else {
    ticketType[item[4]] = ticketType[item[4]] + 1;
  }
  console.log(Object.keys(ticketType));

});

  console.log(ticketType);


let fileSystem = require('fs');

module.exports = function parse(file) {
  let parkingFile = fileSystem.readFileSync(file);

  let returnData = [];
  let contentsOfTheFile = parkingFile;
  let stringValue = contentsOfTheFile.toString();
  let rows = stringValue.split('\n');

  rows.forEach( function printData(row) {
    let singleData = row.split(',');
    returnData.push(singleData);

  });
  return returnData;
};

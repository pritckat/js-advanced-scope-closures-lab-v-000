function produceDrivingRange(range) {
  return function(start, stop) {
    let startdig = start.slice(0, start.length - 2)
    let endig = stop.slice(0, stop.length - 2)
    let difference = Math.abs(endig - startdig)
    return (range > difference ? `within range by ${Math.abs(range - difference)}` : `${Math.abs(range - difference)} blocks out of range`);
  }
}

function produceTipCalculator(thing) {
  return function(otherthing) {
    return thing * otherthing;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}

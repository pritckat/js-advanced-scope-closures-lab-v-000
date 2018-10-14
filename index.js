function produceDrivingRange(range) {
  return function(start, stop) {
    let startdig = start.slice(0, start.length - 2)
    let endig = stop.slice(0, stop.length - 2)
    let difference = Math.abs(endig - startdig)
    return (range > difference ? `Within range by ${Math.abs(range - difference)}` : `${Math.abs(range - difference)} blocks out of range`);
  }
}

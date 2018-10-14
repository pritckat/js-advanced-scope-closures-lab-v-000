function produceDrivingRange(range) {
  return function(start, stop) {
    let startdig = start.slice(0, start.length - 2)
    let endig = stop.slice(0, stop.length - 2)
    let difference = Math.abs(endig - startdig)
    return (range > difference ? true : `${difference}`);
  }
}

function produceDrivingRange(range) {
  return function(start, stop) {
    startdig = start.slice(0, start.length - 2)
    endig = stop.slice(0, stop.length - 2)
    return (range > Math.abs(startdig - endig) ? true : `${Math.abs(range - Math.abs(startdig - endig))} blocks out of range`);
  }
}

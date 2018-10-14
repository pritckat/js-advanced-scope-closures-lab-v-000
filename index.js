function produceDrivingRange(range) {
  return function(start, stop) {
    startdig = start.slice(0, start.length - 2)
    return (range > (start - stop) ? true : startdig);
  }
}

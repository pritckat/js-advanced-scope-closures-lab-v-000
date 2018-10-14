function produceDrivingRange(range) {
  return function(start, stop) {
    (range > (start - stop) ? true : false);
  }
}
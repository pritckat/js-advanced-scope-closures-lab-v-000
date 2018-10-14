function produceDrivingRange(range) {
  return function(start, stop) {
    return (range > Math.abs(start - stop) ? true : `${range - Math.abs(start - stop)}`);
  }
}

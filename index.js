function produceDrivingRange(range) {
  return function(start, stop) {
    return (range > (start - stop) ? true : `${range}`);
  }
}

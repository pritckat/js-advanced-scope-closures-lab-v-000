function produceDrivingRange(thing) {
  return function(otherThing) {
    (thing > otherThing ? true : false);
  }
}
function getGorYear(reqYear) {
  const currentGregorianYear = 2017;
  const currentGorYear = [23, 9, 0]; // YX9A
  const gorYearTemplate = [21, 9, 21];
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const diff = currentGregorianYear - reqYear;
  const diffGorYear = currentGorYear;
  let i = 0;
  while (i < diff) {
    if (diffGorYear[2] > 0) {
      diffGorYear[2] -= 1;
    } else if (diffGorYear[1] > 0) {
      diffGorYear[2] = gorYearTemplate[2];
      diffGorYear[1] -= 1;
    } else {
      diffGorYear[1] = gorYearTemplate[1];
      diffGorYear[2] = gorYearTemplate[2];
      diffGorYear[0] -= 1;
    }
    i += 1;
  }
  const currentGorYearString = `Y${alphabet[
    diffGorYear[0]
  ].toUpperCase()}${diffGorYear[1]}${alphabet[diffGorYear[2]].toUpperCase()}`;
  return currentGorYearString;
}

// eslint-disable-next-line
export function getDiscount(reduction, preDiscPrice) {
  return Math.floor(100 * reduction / preDiscPrice);
}


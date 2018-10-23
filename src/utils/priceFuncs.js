// eslint-disable-next-line
export function getDiscount(reduction, preDiscPrice) {
  return Math.round(100 * reduction / preDiscPrice);
}


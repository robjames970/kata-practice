enum numeralsEnum {
  one = "I",
  four = "IV",
  five = "V",
  nine = "IX",
  ten = "X",
  forty = "XL",
  fifty = "L",
  ninety = "XC",
  oneHundred = "C",
  fourHundred = "CD",
  fiveHundred = "D",
  nineHundred = "CM",
}
export const parseToNumeral = (numeral: number): string => {
  if (numeral > 999) {
    return "Numeral too large!";
  }

  if (numeral < 1) {
    return "";
  }

  if (numeral === 1) {
    return numeralsEnum.one;
  }

  if (numeral === 4) {
    return numeralsEnum.four;
  }

  if (numeral === 9) {
    return numeralsEnum.nine;
  }

  if (numeral >= 900) {
    return `${numeralsEnum.nineHundred}${parseToNumeral(numeral - 900)}`;
  }

  if (numeral >= 500) {
    return `${numeralsEnum.fiveHundred}${parseToNumeral(numeral - 500)}`;
  }

  if (numeral >= 400) {
    return `${numeralsEnum.fourHundred}${parseToNumeral(numeral - 400)}`;
  }
  if (numeral >= 100) {
    return `${numeralsEnum.oneHundred}${parseToNumeral(numeral - 100)}`;
  }

  if (numeral >= 90) {
    return `${numeralsEnum.ninety}${parseToNumeral(numeral - 90)}`;
  }

  if (numeral >= 50) {
    return `${numeralsEnum.fifty}${parseToNumeral(numeral - 50)}`;
  }

  if (numeral >= 40) {
    return `${numeralsEnum.forty}${parseToNumeral(numeral - 40)}`;
  }

  if (numeral >= 10) {
    return `${numeralsEnum.ten}${parseToNumeral(numeral - 10)}`;
  }

  if (numeral >= 5) {
    return `${numeralsEnum.five}${parseToNumeral(numeral - 5)}`;
  }

  return `${numeralsEnum.one}${parseToNumeral(numeral - 1)}`;
};

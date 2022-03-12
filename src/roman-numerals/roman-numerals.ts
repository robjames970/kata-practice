interface NumeralValuePair {
  value: number;
  numeral: string;
}

const numeralValues: NumeralValuePair[] = [
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

export const parseToNumeral = (number: number): string => {
  if (number > 999) {
    return "Numeral too large!";
  }

  for (let i = 0; i < numeralValues.length; i++) {
    const n = numeralValues[i];
    if (number >= n.value) {
      return `${n.numeral}${parseToNumeral(number - n.value)}`;
    }
  }

  return "";
};

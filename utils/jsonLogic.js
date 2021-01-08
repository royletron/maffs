import jsonLogic from "@axa-ch/json-logic-js";

const randomWholeBetween = (min, max) => {
  const range = max - min;
  return min + Math.floor(Math.random() * max);
};

const arrayWholeBetween = (min, max, not = []) => {
  if (typeof not === "number") {
    not = [not];
  }
  console.log(min, max);
  return new Array(max - min)
    .fill()
    .map((v, idx) => min + idx)
    .filter((v) => !not.includes(v));
};

export const arrayShuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const arraySlice = (array, start, end) => {
  return array.slice(start, end);
};

function deepMap(apply, data, [array, logic]) {
  const values = apply(array, data);
  return values.map((item) => {
    return apply(logic, { ...data, _: item });
  });
}
deepMap.deepFirst = false;

jsonLogic.add_operation("Math", Math);
jsonLogic.add_operation("randomWholeBetween", randomWholeBetween);
jsonLogic.add_operation("arrayWholeBetween", arrayWholeBetween);
jsonLogic.add_operation("arrayShuffle", arrayShuffle);
jsonLogic.add_operation("arraySlice", arraySlice);
jsonLogic.add_operation("deepMap", deepMap);

export const generate = (arr, data = {}) => {
  arr.forEach(([key, operation]) => {
    data[key] = jsonLogic.apply(operation, data);
  });
  return data;
};

export default jsonLogic;

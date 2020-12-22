import React, { useCallback, useMemo } from "react";
import arrayShuffle from "utils/arrays/shuffle";
import randomBetween from "utils/numbers/random/between";

export default function useTimesTable({
  right,
  minLeft = 1,
  maxLeft = 10,
  shuffleEquation = false,
  seed = 1,
}) {
  const left = useMemo(() => randomBetween(minLeft, maxLeft, seed), [
    minLeft,
    maxLeft,
    seed,
  ]);
  const values = useMemo(() => {
    const _numbers = [left * right];
    if (left + 1 < maxLeft) {
      _numbers.push((left + 1) * right);
    } else {
      _numbers.push((left - 2) * right);
    }
    if (left > 1) {
      _numbers.push((left - 1) * right);
    } else {
      _numbers.push((left + 2) * right);
    }
    return arrayShuffle(_numbers);
  }, [left, seed]);
  const test = useCallback((value) => value === left * right, [left, right]);
  const equation = useMemo(() => {
    if (shuffleEquation && Math.random() > 0.5) {
      return `${right} &times; ${left}`;
    }
    return (
      <>
        {left} &times; {right}
      </>
    );
  });
  return { values, test, equation };
}

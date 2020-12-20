import React, { useMemo } from "react";
import arrayShuffle from "../../utils/arrays/shuffle";
import randomBetween from "../../utils/numbers/random/between";

import styles from "./styles.module.css";

export default function Round({ maxEnom, denom, round, onAnswer }) {
  const enom = useMemo(() => randomBetween(1, maxEnom), [maxEnom, round]);
  const numbers = useMemo(() => {
    const _numbers = [enom * denom];
    if (enom + 1 < maxEnom) {
      _numbers.push((enom + 1) * denom);
    } else {
      _numbers.push((enom - 2) * denom);
    }
    if (enom > 1) {
      _numbers.push((enom - 1) * denom);
    } else {
      _numbers.push((enom + 2) * denom);
    }
    return arrayShuffle(_numbers);
  }, [enom, round]);

  const onClick = (number) => {
    if (number === enom * denom) {
      onAnswer(true);
    } else {
      onAnswer(false);
    }
  };
  return (
    <div className={styles.Round}>
      <section>
        {enom} &times; {denom} = ?
      </section>
      <ul>
        {numbers.map((number) => (
          <li key={`number_${number}`}>
            <a onClick={() => onClick(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useMemo, useState } from "react";
import useTimesTable from "hooks/useTimesTable";
import DefaultLayout from "layouts/Default";
import SpaceTheme from "templates/maths/Space";

export default function TimeTablePage({ multiplier, max, seed }) {
  const [showSummary, setShowSummary] = useState(false);
  const [correct, setCorrect] = useState(undefined);
  const [currentSeed, setCurrentSeed] = useState(seed);
  const { equation, values, test } = useTimesTable({
    right: multiplier,
    maxLeft: max,
    seed: currentSeed,
  });
  const onSelect = (value) => {
    console.log(value, test(value));
    setCorrect(test(value));
    setShowSummary(true);
  };
  const next = () => {
    setCurrentSeed(Math.floor(Math.random() * Date.now()));
    setShowSummary(false);
  };
  const summary = useMemo(() => {
    return (
      <>
        <h1>{correct ? "👍 Well done!" : "🥺 Not quite..."}</h1>
        <a onClick={() => next()}>next</a>
      </>
    );
  }, [correct, next]);
  return (
    <DefaultLayout>
      <SpaceTheme
        equation={equation}
        values={values}
        onSelect={onSelect}
        showSummary={showSummary}
        summary={summary}
      ></SpaceTheme>
    </DefaultLayout>
  );
}

TimeTablePage.getInitialProps = async (ctx) => {
  const { multiplier, max } = ctx.query;
  const seed = Date.now() * Math.random();
  return { multiplier: parseInt(multiplier), max: parseInt(max), seed };
};

import Logic from "models/Logic";
import dbConnect from "utils/dbConnect";
import { useMemo, useState, useEffect } from "react";
import useTimesTable from "hooks/useTimesTable";
import DefaultLayout from "layouts/Default";
import SpaceTheme from "templates/maths/Space";
import { generate } from "utils/jsonLogic";

const useJsonLogic = (logic, variables, seed) => {
  return state;
};

export default function Maffs({ seed, logic, variables }) {
  const [showSummary, setShowSummary] = useState(false);
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [state, setState] = useState({
    equation: "loading",
    values: [],
    correct: "",
  });
  useEffect(() => {
    // init
    setState(generate(logic, variables, seed));
  }, []);
  const { equation, values, correct } = state;
  const onSelect = (value) => {
    setIsCorrect(value === correct);
    setShowSummary(true);
  };
  const next = () => {
    const newSeed = Math.floor(Math.random() * Date.now());
    setState(generate(logic, variables, newSeed));
    setShowSummary(false);
  };
  const summary = useMemo(() => {
    return (
      <>
        <h1>{isCorrect ? "👍 Well done!" : "🥺 Not quite..."}</h1>
        <a onClick={() => next()}>next</a>
      </>
    );
  }, [isCorrect, next]);
  console.log({ equation, values, correct });
  return (
    <DefaultLayout>
      <SpaceTheme
        equation={equation}
        values={values}
        correct={correct}
        onSelect={onSelect}
        showSummary={showSummary}
        summary={summary}
      ></SpaceTheme>
    </DefaultLayout>
  );
}

export async function getServerSideProps(context) {
  const { path } = context.query;
  const pathname = path.slice(0, path.indexOf("_")).join("/");
  const variables = path.slice(path.indexOf("_") + 1);
  try {
    await dbConnect();
    const logic = await Logic.findOne({ path: pathname }).lean().exec();
    if (!logic) {
      throw new Error("No logic found!?!");
    }
    const variableObject = logic.variables.reduce((prev, current, idx) => {
      let v = variables[idx];
      switch (current.type) {
        case "number":
          v = v.split(".").length === 1 ? parseFloat(v) : parseInt(v);
          break;
      }
      return { ...prev, [current.name]: v };
    }, {});
    const seed = Date.now() * Math.random();
    return {
      props: {
        seed,
        variables: variableObject,
        logic: logic.logic,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

// export default (req, res) => {
//   console.log(req.path);
//   res.send("ok");
// };

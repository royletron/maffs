import Logo from "components/Logo";
import Logic from "models/Logic";
import dbConnect from "utils/dbConnect";

export default function Maffs() {
  return <div>Hello World....</div>;
}

export async function getServerSideProps(context) {
  const { path } = context.query;
  const pathname = path.slice(0, path.indexOf("_")).join("/");
  const variables = path.slice(path.indexOf("_") + 1);
  await dbConnect();
  const logic = await Logic.findOne({ path: pathname }).exec();
  console.log(logic);
  return {
    props: {},
  };
}

// export default (req, res) => {
//   console.log(req.path);
//   res.send("ok");
// };

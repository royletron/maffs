import Logic from "models/Logic";

export default async function handler(req, res) {
  const { body } = req;
  const { name, path, variables, logic } = body;
  const newLogic = new Logic({
    name,
    path,
    variables,
    logic,
  });
  try {
    await newLogic.save();
    res.send("ok");
  } catch (error) {
    res.status(200).send(error);
  }
}

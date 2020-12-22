import seedrandom from "seedrandom";

const randomBetween = (max, min, seed = Date.now()) =>
  min + Math.floor(seedrandom(seed.toString())() * (max - min));

export default randomBetween;

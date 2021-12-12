const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

// tuple array
const cola: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const coffee: Drink = ["black", false, 0];

// const cola: [string, boolean, number] = ["brown", true, 40];
// cola[1] = "black"; // error

const carSpecs: [number, number] = [400, 3354];

const carSpecs0bj = {
  horsepower: 400,
  weight: 3354
};
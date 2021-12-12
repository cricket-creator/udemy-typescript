var oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var cola = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "Cola has ".concat(this.sugar, " grams of sugar");
    }
};
/*const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};*/
/*const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};*/
var printSummary = function (item) {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken?: ${vehicle.broken}`);
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(cola);

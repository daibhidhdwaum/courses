const carMakers = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// help with inference whe extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// PRevent incompatible values
// carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Felxible types
const importantDates = [new Date(), "2030-10-10"];

/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityInKPH = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceInKm = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//calculations
const newDistance = distanceInKm + (velocityInKPH * timeInSeconds / 3600) //calcultes new distance
const calculateRemainingFuel = remainingFuel - (fuelBurnRate * timeInSeconds) //calculates remaining fuel
const newVelocity = calcNewVel(acceleration, velocityInKPH, timeInSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number'){
    throw new Error('All parameters must be numbers')
  } else if(acc <= 0 || vel <= 0 || time <= 0) {
    throw new Error('Values cannot be less than or equal to 0')
  }
    vel =  vel * 1000 / 3600 // convert velocity from km/h to m/s
    return vel + (acc * time)
}

console.log(`Corrected New Velocity: ${newVelocity * 3600 / 1000} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${calculateRemainingFuel} kg`);







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
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//calculations
const newDistance = distanceInKm + (velocityInKPH * timeInSeconds / 3600) //calcultes new distance
const calculateRemainingFuel = remainingFuel - (fuelBurnRate * timeInSeconds) //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => { 
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number'){
    throw new Error('All parameters must be numbers')
  } else if(acc < 0 || vel < 0 || time <= 0) {
    throw new Error('Acceleration and velocity must be non-negative, and time must be positive.')
  }
    vel =  vel * 1000 / 3600 // convert velocity from km/h to m/s
    return vel + (acc * time)
}

const newVelocity = calcNewVel(velocityInKPH, acceleration, timeInSeconds) //calculates new velocity based on acceleration

//limit the answer to 2 decimal places
console.log(`Corrected New Velocity: ${(newVelocity * 3600 / 1000).toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${calculateRemainingFuel.toFixed(2)} kg`);
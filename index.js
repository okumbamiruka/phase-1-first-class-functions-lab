// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    }
}

const selectDifferentDrivers = (drivers, choice) => {
    
    if (choice === returnFirstTwoDrivers){
        return selectingDrivers[0](drivers);
    }else {
        return selectingDrivers[1](drivers);
    }
    
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(5);

console.log(fareQuintupler);


// Code your solution here
function findMatching(driversArray, nameString){
    return driversArray.filter( (name) => {
        return name.toUpperCase() === nameString.toUpperCase();
    });
};

function fuzzyMatch(driversArray, nameString){
    return driversArray.filter( (name) => {
        return name[0].toUpperCase() === nameString[0].toUpperCase();
    
    });
};

function matchName(driversArray, nameString){
    return driversArray.filter( (driverName) => {
        return driverName.name === nameString;
    });
};
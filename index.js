// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



function findMatching(drivers, name){
    const matching = drivers.filter(function(person){return person === name || person === name.toLowerCase()});
    return matching;
}
console.log(findMatching(drivers,"Bobby"))

function fuzzyMatch(drivers, name){
    const matching2 = drivers.filter(function(person){return person.slice(0,1) === name.slice(0,1)});
    return matching2;
}
console.log(fuzzyMatch(drivers,"Sammy"));

function matchName(drivers, name){
    const matching3 = drivers.filter(function(hometown){return hometown.name=== name});
    return matching3;
}
console.log(findMatching(drivers, person))
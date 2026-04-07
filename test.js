const fruits = ["Bl", "Ba", "al"]
const sortFruits = fruits.sort((a, b) => a.localeCompare(b))
console.log(sortFruits);


function getDay(day) {
   const dayMap = new Map([
      ["понедельник", 1],
      ["вторник", 2],
      ["среда", 3],
      ["четверг",4],
      ["пятница", 5],
      ["суббота", 6],
      ["воскресенье", 7],
   ])
   return dayMap.get(day)
}
const day = getDay("понедельник")
console.log(day);
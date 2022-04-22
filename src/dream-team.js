const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((elem) => {
    if (typeof elem === 'string') {
      let firstLetter = elem.trim()
        .toUpperCase()
        .split('')
        .slice(0, 1);
      team.push(firstLetter);
    }
  })
  return team.sort().join('');
}

module.exports = {
  createDreamTeam
};

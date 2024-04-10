const characters = [
    { name: "Guerrier", life: 50, xp: getRandomInt(1, 10), weapon: getRandomInt(1, 10), shield: getRandomInt(1, 10) },
    { name: "Mage", life: 50, xp: getRandomInt(1, 10), weapon: getRandomInt(1, 10), shield: getRandomInt(1, 10) },
    { name: "Archer", life: 50, xp: getRandomInt(1, 10), weapon: getRandomInt(1, 10), shield: getRandomInt(1, 10) },
    { name: "Voleur", life: 50, xp: getRandomInt(1, 10), weapon: getRandomInt(1, 10), shield: getRandomInt(1, 10) }
];

/**
 * Generate random number between minimum and maximum from parameters
 * @param {number} min - minimum value for random number
 * @param {number} max - maximum value for random number 
 * @returns {number} A random number between minimum and maximum
 */
//From Exercice function-2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get round figth in attacker and defenser
 * @param {*} attacker - sum of attacker xp + random value of attacker weapon
 * @param {*} defender - sum of defenser xp + random value of attacker shield
 */
function roundFigth(attacker, defender) {
    const attack = attacker.xp + getRandomInt(0, attacker.weapon);  
    const defense = defender.xp + getRandomInt(0, defender.shield);

    if (attack > defense) {
        defender.life -= attack;
        console.log(`${attacker.name} attaque ${defender.name} avec succès, infligeant ${attack} points de dégâts.`);
        if (defender.life <= 0) {
            console.log(`${defender.name} est mort.`);
        }
    } else {
        console.log(`${attacker.name} attaque ${defender.name} mais ${defender.name} parvient à se défendre.`);
    }
}
/**
 * Get is the player alive or not
 * @returns {boolean} - player is alive?
 */
//Player alive?
function playersAlive() {
    return characters.filter(character => character.life > 0);
}
/**
 * Start the battlefield
 */
//Battlefield
function battlefield() {
    for (let round = 1; playersAlive().length > 1; round++) {
        console.log(`Tour ${round} de la bataille :`);
        const fighters = playersAlive();
        const attackerIndex = getRandomInt(0, fighters.length - 1);
        let defenderIndex;
        do {
            defenderIndex = getRandomInt(0, fighters.length - 1);
        } while (defenderIndex === attackerIndex);

        const attacker = fighters[attackerIndex];
        const defender = fighters[defenderIndex];

        roundFigth(attacker, defender);
    }

    const winner = playersAlive()[0];
    console.log(`La bataille est terminée. ${winner.name} est le gagnant avec ${winner.life} points de vie restants.`);
}
// start the battlefield
battlefield();
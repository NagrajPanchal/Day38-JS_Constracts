let diceNumber = 0;
var addDiceNumber = 0;
for (i=1; i<3; i++)
{
    diceNumber = Math.floor(Math.random() * 10) % 6;
    console.log("Dice Number : ("+i+")=>"+diceNumber);
    addDiceNumber = addDiceNumber+diceNumber;
}
console.log("Add Dice Number : "+addDiceNumber);

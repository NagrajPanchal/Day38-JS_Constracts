let randomNumber = 0;
var addRandomNumber = 0;
for (i=1; i<6; i++)
{
    do {
        randomNumber = Math.floor(Math.random() * 99);
        } while (randomNumber < 100);        
    console.log("Dice Number : ("+i+")=>"+randomNumber);
    addRandomNumber = addRandomNumber+randomNumber;
}
// let sumAvg = addRandomNumber;
console.log("Add Sum Number : "+addRandomNumber);

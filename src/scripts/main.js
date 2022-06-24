// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'
import {PotteryList} from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 8, 10)
let bowl = makePottery("bowl", 16, 9)
let napkinRing = makePottery("napkin ring", 4, 4)
let plate = makePottery("plate", 15, 3.5)

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2201);
const firedBowl = firePottery(bowl, 2199);
const firedNapkinRing = firePottery(napkinRing, 2180);
const firedPlate = firePottery(plate, 2211)

//console.log(firedMug, firedBowl, firedNapkinRing, firedPlate)

// Determine which ones should be sold, and their price
let arrayOfPotteryForSale = [];
arrayOfPotteryForSale = toSellOrNotToSell(firedMug);
arrayOfPotteryForSale = toSellOrNotToSell(firedBowl);
arrayOfPotteryForSale = toSellOrNotToSell(firedNapkinRing);
arrayOfPotteryForSale = toSellOrNotToSell(firedPlate);

let portableArrayOfPottery = usePottery();

console.log(portableArrayOfPottery)

// Invoke the component function that renders the HTML list

let potteryHTML = PotteryList(portableArrayOfPottery); 


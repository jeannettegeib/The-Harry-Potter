// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 8, 4)
let bowl = makePottery("bowl", 16, 3.5)
let napkinRing = makePottery("napkin ring", 4, 1.8)
let plate = makePottery("plate", 15, 1.4)



// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2201);
const firedBowl = firePottery(bowl, 2199);
const firedNapkinRing = firePottery(napkinRing, 2180);
const firedPlate = firePottery(plate, 2211)

console.log(firedMug, firedBowl, firedNapkinRing, firedPlate)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




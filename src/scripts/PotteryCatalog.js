// Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.

let potteryForSale= [];

// Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.// The toSellOrNotToSell function must accept a pottery object as input.

export const toSellOrNotToSell= (paramObject)=>{
// If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.// If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.
paramObject.weight >= 6? paramObject.price=40 : paramObject.price=20;

// If the pottery is not cracked, add the object to the module-level array of items to be sold.
if (paramObject.cracked === false){ 
    potteryForSale.push(paramObject)
}

return potteryForSale;

}

// Define and export a function named usePottery returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.???
export const usePottery =() =>{
    return potteryForSale.map(fishTacos =>({...fishTacos}))
}




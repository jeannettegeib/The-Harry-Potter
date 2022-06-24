


export const PotteryList = (paramArray) =>{
    let htmlString ="";
    for (const eachObject of paramArray){
        htmlString += `<section class="pottery" id="pottery--${eachObject.id}"> <h2 class="pottery__shape">${eachObject.shape}</h2>\n<div class="pottery__properties"> Item weighs ${eachObject.weight} ounces and is ${eachObject.height} cm in height\n</div><div class="pottery__price">\nPrice is $${eachObject.price}`
    }
    return htmlString
}
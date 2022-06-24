let id =0;

//weight in ounces. height in centimeters
export const makePottery =(paramShape, paramWeight, paramHeight)=>{
    id++
    return  {
    id:id,
    shape:paramShape,
    weight:paramWeight,
    height:paramHeight
    }

    }  
    


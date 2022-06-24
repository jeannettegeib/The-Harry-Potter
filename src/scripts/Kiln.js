export const firePottery = (paramObject, paramTemp)=> {
 let paramCracked="";   
 paramTemp > 2200 ?   paramCracked=true :  paramCracked=false;  //"ternary operators" --https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow/cheatsheet
 paramObject.fired=true;
 paramObject.cracked=paramCracked;
 
 return paramObject;
}
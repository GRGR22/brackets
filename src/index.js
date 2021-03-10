// module.exports = function check(str, bracketsConfig) {
  module.exports = function check(str, bracketsConfig) {
    let newStr=str.split('');
    bracketsConfig=bracketsConfig.flat();

    for (let i=0; i<newStr.length; i++) {

        for(let j=0; j<bracketsConfig.length; j++) { 
            // console.log((newStr[i]+newStr[i+1]), (bracketsConfig[j]+bracketsConfig[j+1]));           
            if ((newStr[i]+newStr[i+1]) == (bracketsConfig[j]+bracketsConfig[j+1])) {
                newStr.splice(i, 2);
                i=i-2;
            }
        }
    }
    if (newStr.length > 0) {
        return false
    } else { return true }    
}
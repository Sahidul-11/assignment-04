// problem-01
function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
     totalEarn = ticketSale * 120 ;
     totalCost = 8 * 50 + 500;
     totalSavings = totalEarn - totalCost;
     return totalSavings
    }

    else{
        return 'invalid ticket number'
    } 
}

// problem-02
function checkName(name){
    let lastWord = name[name.length - 1].toLowerCase();
    if (typeof name === 'string') {
        if (lastWord === 'a' || lastWord === 'y' ||  lastWord === 'i' ||  lastWord === 'e' ||  lastWord === 'o' ||  lastWord === 'w' ||  lastWord === 'u'){

            return 'Good Name'
        }
        else {
            return 'Bad Name'
        } 
    }
    else{
        return 'Invalid name'
    }
} 
// problem-03
function deleteInvalids(array) {
    if (Array.isArray(array)) {
        let newArray =[];
        for (let num of array){
          if ( typeof num === 'number') {
            newArray.push(num);
          }
        } 
        return newArray ; 
    }
    else{
        return 'Invalid Array';
    } 
 }
// problem-4
function password(obj){
    const keys = Object.keys(obj);
    const year = obj.birthYear ;
    if (keys.length == 3 && year >=1000) {
        let firstWord = obj.siteName;
       firstWord = firstWord[0].toUpperCase() +  firstWord.slice(1);
       const creatPassword = firstWord + '#' + obj.name + '@' + obj.birthYear;
       return creatPassword ;

    }
    else{
        return 'Invalid'
    }
}
// problem-05
function monthlySavings(input1 , input2){
    if (typeof input1 !== Array && typeof input2 !== 'number') {
       return 'invalid input' 
    }
    else {
        let totalEarn = 0 ;
       for (let payment of input1) {
            if (payment >= 3000) {
                payment = payment - payment * 0.2;
                totalEarn = totalEarn + payment ;
            }
            else {
                totalEarn = totalEarn + payment
            }
       } 
    const totalSavings = totalEarn - input2 ;
       if (totalSavings >= 0) {
        return totalSavings ;
       }
       else{
        return 'Earn more'
       }
       
    }  
}

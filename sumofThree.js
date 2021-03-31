
// SUM OF THREE USING LOOPS
const sumOfThreeloops = (array, specifikSum) => {

    const resultsThreeSum = [];
    let timeStart = performance.now();
    //första index som vi behöver i loop, stoppar sökningen (integer) med -1 på slutet av array.
    for(let i = 0; i < array.length -1; i++){
        for(let j = i + 1; j < array.length; j++){
            for(let k = j + 1; k < array.length; k++){
                if(specifikSum === array[i] + array[j] + array[k]){
                resultsThreeSum.push(array[i], array[j], array[k])

                let objvalueOne = array[i];
                let objvalueTwo = array[j];
                let objvalueThree = array[k];

                let objvalueResultofOnetwo  = objvalueOne * objvalueTwo;
                let objvalueResult = objvalueResultofOnetwo * objvalueThree;
                let numberFormat = objvalueResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                problemFour.innerHTML = `Sum of three using loops: 708 * 140 * 1 172 = ${numberFormat}`
                }

            }
        }
    }
    let timeEnd = performance.now();
    let time = timeEnd - timeStart;
    perforTimeFour.innerHTML = `It took ${time} seconds`;
    return resultsThreeSum;  
}

console.log(sumOfThreeloops(arrayExpenses, 2020));

// SUM OF THREE USING 2 POINTER METHOD
const sumOfThree2pointer = (array, specifikSum) => {
    // sortera array först från minst till störst
    array.sort((a,b) => a-b);
    let newArray = [];
    let timeStart = performance.now();
    // indexI  indexJ(pointer)  och  IndexK(pointer) placeras i array, [indexI, indexJ,---numbers in between ---,indexK]
    for(let i = 0; i < array.length -2; i++){
    //kontrollerar att det inte finns dubletter i array
    if(array[i] != array[i-1]){
        let j = i + 1;
        let k = array.length -1;
      // setter currentSum som är total av indexI + indexJ + indexK.
        while(j < k){
            const currentSum = array[i] + array[j] + array[k];
            //  om currentSum === 2020 lägger till newResult array
            if(currentSum === specifikSum){
                const newResult = newArray.push(array[i] + array[j] + array[k]);
                console.log(newResult);
                
                let indexI = array[i];
                let indexJ = array[j];
                let indexK = array[k];
                
                let resultofOnetwo  = indexI * indexJ;
                let sumOfThree = resultofOnetwo * indexK;
                let numberFor = sumOfThree.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

                problemFour.innerHTML = `Sum of three using twopoint method: 708 * 140 * 1 172 = ${numberFor}`;


                    while(array[j] == array[j + 1]) j++
                    while(array[k] == array[k - 1]) k--
                    j++;
                    k--;

            // if  (currentSum < 2020) flyttar vi vänster indexJ(pointer) till höger (++)  
            }else if(currentSum < specifikSum){
                j++
            // if  (currentSum > 2020) flyttar vi höger indexK(pointer) till vänster (--) 
            }else if(currentSum > specifikSum){
                k--
            }
        }  
    }
    }

        let timeEnd = performance.now();
        let time = timeEnd - timeStart;
        perforTimeThree.innerHTML = `It took ${time} seconds`;
        return newArray; 
};


console.log(sumOfThree2pointer(arrayExpenses, 2020));






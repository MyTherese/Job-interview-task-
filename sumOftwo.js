

// SUM OF TWO USING HASH
const sumOfTwohash = (array, specifikSum) => {
    hashObject = {};
    const resultsTwosum = [];
    let timeStart = performance.now();
    // first loop throug array and get index
    for(let i = 0; i < array.length; i++){
        // to simplify hash function uses the index/key from array to get second index.
        if(hashObject[array[i]]){
            
            let objvalueOne = hashObject[array[i]];
            let objvalueTwo = array[i];
            let objvalueResul = objvalueOne * objvalueTwo;
            let numberFormat  = new Intl.NumberFormat('fr-FR').format(objvalueResul);

            problemOne.innerHTML = `Sum of two using hash function: 631 * 1 389 = ${numberFormat}`;
            //pushes elemnt till empty array av results
            resultsTwosum.push([hashObject[array[i]], array[i]])
        }
        hashObject[specifikSum - array[i]] = array[i];
    }
        
        let timeEnd = performance.now();
        let time = timeEnd - timeStart;
        perforTimeOne.innerHTML = `It took ${time} seconds`;

        return resultsTwosum;
}




// SUM OF TWO USING LOOPS
const sumOfTwoloops = (arr, sum) => {
    const noHash = [];
    let timeStart = performance.now();
// first loop throug array and get index
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if (arr[i] + arr[j] === sum){
                let objvalueOne = arr[i];
                let objvalueTwo = arr[j];
                let objvalueResul = objvalueOne * objvalueTwo;
                let numberFormat  = new Intl.NumberFormat('fr-FR').format(objvalueResul);

                problemTwo.innerHTML = `Sum of two using loops: 631 * 1389 = ${numberFormat}`;
                noHash.push(arr[i], arr[j]);
            }
        }

        let timeEnd = performance.now();
        let time = timeEnd - timeStart;
        perforTimeTwo.innerHTML = `It took ${time} seconds`;
        }
    
        return noHash;
}

console.log(sumOfTwohash(arrayExpenses, 2020));
console.log(sumOfTwoloops (arrayExpenses, 2020));

const problemOne = document.getElementById("sumOftwo_1");
const perforTimeOne = document.getElementById("time_1");
const problemTwo = document.getElementById("sumOftwo_2");
const perforTimeTwo = document.getElementById("time_2");
const problemThree = document.getElementById("sumThree_1");
const perforTimeThree = document.getElementById("time_3");
const problemFour = document.getElementById("sumThree_2");
const perforTimeFour = document.getElementById("time_4");



const arrayExpenses = [1228, 1584, 1258, 1692, 1509, 1927, 1177, 1854, 1946, 1815, 1925, 1531, 1529, 1920, 1576, 1392, 1744, 1937, 1636, 1615, 1944, 1949, 1931, 1253, 1587, 1860, 1874, 1611, 2008, 1182, 1900, 1515, 1978, 1996, 116, 1588, 1322, 1680, 1174, 1712, 1513, 1778, 1443, 1569, 1453, 708, 1783, 1926, 1959, 2001, 1776, 1643, 1654, 1934, 1983, 1630, 1382, 1486, 1422, 1836, 1728, 1315, 1843, 1521, 1995, 1403, 1897, 1280, 1981, 1901, 1870, 1519, 1945,1857, 591, 1329, 1954, 1679, 1726, 1846, 1709, 1695, 1293, 1602, 1665, 1940, 1921, 1861, 1710, 1524, 1303, 1849, 1742, 1892, 1913, 1530, 1484, 1903, 1545, 1609, 1652, 1908, 1923, 1188, 1649, 1994, 1790, 1832, 140, 867, 1664, 1598, 1371, 1018, 35, 1833, 1161, 1898, 1482, 1767, 1252, 1882, 1448, 1032, 1459, 1661, 1391, 1770, 1806, 1465, 1295, 1546, 1355, 1358, 1321, 1368, 1514, 1756, 1775, 1957, 1468, 1975, 631, 1812, 1151, 1167, 1251, 1960, 1991, 1972, 1936,  1552, 1419, 1577, 1549, 1580, 1974, 1830, 1813, 893, 1492, 1389, 1454, 1522, 1556, 1172, 1653, 1822, 1328, 1907, 1999, 1281, 1912, 1919, 1896, 1722, 1341, 1720, 1201, 1512, 1298, 1254, 1947, 1505, 1594, 1334, 1592, 1943, 1405, 1589, 1263, 1930, 1736, 1180, 1984, 1401, 1340, 1292, 1979, 1876];

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

                problemOne.innerHTML = `Sum of two using loops: 631 * 1389 = ${numberFormat}`;
                noHash.push(arr[i], arr[j]);
            }
        }

        let timeEnd = performance.now();
        let time = timeEnd - timeStart;
        perforTimeOne.innerHTML = `It took ${time} miliseconds`;
        }
    
        return noHash;
}

console.log(sumOfTwoloops(arrayExpenses, 2020));

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

            problemTwo.innerHTML = `Sum of two using hash function: 631 * 1 389 = ${numberFormat}`;
            //pushes elemnt till empty array av results
            resultsTwosum.push([hashObject[array[i]], array[i]])
        }
        hashObject[specifikSum - array[i]] = array[i];
    }
        
        let timeEnd = performance.now();
        let time = timeEnd - timeStart;
        perforTimeTwo.innerHTML = `It took ${time} miliseconds`;

        return resultsTwosum;
}


console.log(sumOfTwohash(arrayExpenses, 2020));







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
                problemThree.innerHTML = `Sum of three using loops: 708 * 140 * 1 172 = ${numberFormat}`;

                }
            }
        }
    }
    let timeEnd = performance.now();
    let time = timeEnd - timeStart;
    perforTimeThree.innerHTML = `It took ${time} miliseconds`;
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
        perforTimeFour.innerHTML = `It took ${time} miliseconds`;
        return newArray; 
};


console.log(sumOfThree2pointer(arrayExpenses, 2020));




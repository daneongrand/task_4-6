let array = new Array(5)
fillArray(array)
console.log(array)
array = replaceFromArray(array)
console.log(array)
array = addToArray(array)
console.log(array)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function fillArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = getRandomIntInclusive(-100, 100)
    }
}

function replaceFromArray(arr) {
    let newarr = arr.map(item => {
        return (item < 0) ? 0 : item
    })
    return newarr
}

function addToArray(arr) {
    let newarr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0 && i % 2 == 0 && i != 0) {
            newarr.push(arr[i])
            newarr.push(-1)
        } else {
            newarr.push(arr[i])
        }
    }
    return newarr
}



function filterBy (arr, type) {
    let newArr=[];
    for (let i=0; i<arr.length; i++)
        if (typeof arr[i] != type) 
            newArr.push(arr[i]);
    return newArr;
}

let array = ['hello', 'world', 23, '23', null];
const type = 'string';

console.log(filterBy(array,type)); 
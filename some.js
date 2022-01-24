
let array = [];

array = [1, 2, 3, 4];  //insert here, all entries you want

array=allVarients(array);

console.log("arr.length= " + array.length);
array.forEach(element => {
    console.log(element);
});

function allVarients(array) {
    let arr = [];
    arr[0] = array;
    let now_count = arr.length;
    let sum_numbers = arr[0].length;

    for (let index = 0; index < sum_numbers - 1; index++) {
        for (let i = 0; i < now_count; i++) {
            for (let j = index + 1; j < sum_numbers; j++) {
                let new_arr = replace(arr[i], index, j);
                arr.push(new_arr);
            }
        }
        now_count = arr.length;
    }
    return arr;
}


function replace(arr, i1, i2) {

    let new_arr = [];

    for (let i = 0; i < arr.length; i++) {
        new_arr[i] = arr[i];
    }
    let temp = new_arr[i1];
    new_arr[i1] = new_arr[i2];
    new_arr[i2] = temp;

    return new_arr;
}
arr = [1,2,4,5,6]
arr[2] = 23;
a = arr.length;
// console.log(a);


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }

console.log(arr.toString()); // to covert arr to string
console.log(arr.join(" ")); // removes the , and join with or it is mostly use to display the content in frontend
// we know the stack so this is property we learn in the stack pop, push like this we can use them in js also to manipulate the arr
console.log(arr.pop()); 
console.log(arr.push(100));
console.log(arr.push("krushna"));
console.log(arr);
//so these are by rule of the stack 
//
console.log(arr.shift());// this is opposite of the pop
console.log(arr);
console.log(arr.unshift("krishan"));//this is the opposite of the push
console.log(arr);
//delete 
delete arr[4]
console.log(arr);
//concatinate
let a1 = [12, 4, 3, 5]
let a2 = [1, 4, 3, 5]
let a3 = [12, 4, 36, 5]

let arr1 = a1.concat(a2, a3)
console.log(arr1);

// sort
let me = [3,2,0]
me.sort()
console.log(me);


// Loops use in array 
arr.forEach((index ) => {
    console.log(index);
    
});// this is the for each loop 

let obb1 = {
    a: 1, 
    b: 2, 
    c:3
}

for (const key in obb1) {
    if (Object.prototype.hasOwnProperty.call(obb1, key)) {
        const element = obb1[key];
        console.log(key , element);
        
    }
}// this is the forin loop use for obj arry is also the obj type

// console.log("for of");

for (const i of arr) {
    console.log(i);
    
}//so this loop is use directly for arr for of



// map , filter , reduce

// to make a new arr using exsting
// let newarr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr);

//we can write the same thing using map 
let newarr = arr.map((e)=>{
    return e**2;
})

console.log(newarr);
//now we get the same output by using the map

arry = [23, 43, 5, 65, 45, 6, 768]
let greater = (e) => {
    if(e>7){
        return true;
    }
    return false;
}

console.log(arry.filter(greater));
// like that we can use the filter in array 

console.log(Array.from("krushna"));//to make anything arr

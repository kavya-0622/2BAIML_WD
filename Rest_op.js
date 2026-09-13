function sum(...value){
    let total = 0;
    for(let n of value){
        total = total+n;
    }
    return total;
}

console.log(sum(10,20))
console.log(sum(10,20,30))

function sum(name, ...value){
    let total = 0;
    for(let n of value){
        total = total+n;
    }
    console.log("name: ", name);
    console.log("total: ", total);
    return total;
}

console.log(sum("Kavya", 10,20))
console.log(sum("Kavya",100,2000,300))
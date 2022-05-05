//map prserve order of insertion of key value pairs
//map also preserve the type of keys i.e. it doesnt the keys to string by defalut 
 let map = new Map();

 map.set('name','hitesh');
 map.set('age',22);
 map.set(1,'one');
 map.set('phone',9668544);
 map.set(true,'true');

console.log(map.get('name'));
console.log(map.has('EMAIL'));
map.delete(1);
console.log(map.size);


 console.log(map);
 console.log(map.size);

for(let key of map.keys()){
    console.log(key);
}
for(let value of map.values()){
    console.log(value);
}

for(let entry of map.entries()){
    console.log(entry);
}

map.forEach(function(key,value) {
    console.log(key,value);
})

//sets has no keys only unique have values

//....................................

let set1 = new Set();

set1.add('apple');
set.add('banana');
set1.add('orange');

console.log(set1);

set1.values();
console.log(set1);

//sets can not give key value pair only give value value

console.log(set1.has('kiwi'));//false
console.log(set1.has('apple'));//ture

//iter-rating

for(let value of set1.values()){
    console.log(value);
}


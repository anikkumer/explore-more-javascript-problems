const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// console.log(typeof friends);
console.log(typeof add);

// Check Array: Array.isArray() model declare----------------------------------
console.log(Array.isArray(friends));
console.log(Array.isArray(age));

// Check Element :----------------------------------------
// step:-1-- includes()
console.log(friends.includes(19));
console.log(friends.includes(21));


// step:-2-- index.of()-----------------------clear na
// if(friends.indexOf(21) !== -1 ){
   
// }


// concat: join/merge/add or Put to Array together
const newFriendsAge = [12, 14, 15, 99]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);

const count = 1000;
const userName: string= "UserNamePolina";
const nullVar: null=null;
const arrayVar: number[]=[1,2,3,4];
const spreadVar = [...arrayVar];

$(".testClass");

// console.log(0??true);
//
// [1,[2,3,4]].flat();

class testClass {
    #privateF=3;
    testProp : number = 2 ;
    constructor() {
    }
}

// let flat = require('array.prototype.flat');
console.log(([1, [2, 3]].flat()));
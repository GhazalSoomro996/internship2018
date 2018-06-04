// function test() {
    
//     bar(); 
//     var foo = function () { 
        
//     alert("Foo Function run!");
//     }
//     foo(); 
//     function bar() { 
//     alert("Bar Function run!");
//     }
//     }
   
//     test();
// (function(){
//     var a = b= 3;
//     })();
    
//     console.log(" Is a defined ? " + (typeof a !== 'undefined'));
//     console.log("Is b defined ? " + (typeof b !== 'undefined'));
/////////////////////////
// var counter=function() {
//     var _counter=0;
//     return {
//     add: function(num) { _counter=+num; },
//     retrieve: function() { return console.log("the value of counter is currently: "+_counter); }
//     };	
//     };
//     var count=counter();
    
//     count.add(9);
//     count.add(5);
//     count.retrieve();
/////////////////////////
// (function () {
//     try {
//     throw new Error();
//     } catch (x) {
//     var x = 1, y = 2;
//     console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//     })();
//////////////////////
// var Output = (function(X) 
// { 
// Delete X; 
// return X; 
// } 
// )(0); 
// console.log(output)

var str="ghazal soomro is the best is"
console.log(str.indexOf("is",17));//first is
console.log(str.lastIndexOf("is"));//last is
console.log(str.search("is"));//first 
console.log(str.slice(3,10));
console.log(str.slice(8));
console.log(str.substring(3,9));
console.log(str.substr(3,9));
console.log(str.replace("best","bad"));
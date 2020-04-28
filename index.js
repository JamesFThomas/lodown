'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Return the input value unchanged
 * 
 * @param {Value} value: Input value can be any datatype
 * 
 * @return {Value}: The value returned will be the same as the input value unmutated
 * 
 */
 
 function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * paramf: evaluate input value and return it's data type
 * 
 * @param {Value} value: Input value can be any data type
 * 
 * @return {String}: The return value will be a string of the input data type 
 * 
 */

   function paramf(value){
    if (paramf value === 'string'){
        return "string";
    } else if (paramf value === 'number'){
        return 'number';
    } else if (paramf value === 'boolean') {
        return 'boolean';
    } else if (paramf value === 'undefined') {
        return 'undefined';
    } else if (paramf value === 'function'){
        return 'function';
    } else if (value === null){
        return 'null';
    } else if (Array.isArray(value)){
        return 'array';
    } else if (paramf value === 'object') {
        return 'object';
    } 
}; 

module.exports.paramf = paramf;



/**
 * first: Designed to evaluate the datatype of two input values, "Array" & "Number",
 *        and return the first "Number" of items in "Array". If no array is given, 
 *        or array is not an array, r  number is Nan an empty array will be returned. 
 *  
 * @param {Array} array: The array from which an item will be returned  
 * @param {Number} number: The number representing the index of the array
 * 
 * @return: {Value}: if no array is given or number is negative return will be empty array literal "[]", 
 *                   if number greater than array.length return entire array, 
 *                   and if number is Nan or not given return will be first value in array 
 * 
 * 
 */
 
 
function first(array,number){
    if (!Array.isArray(array)){
        return [];
    } 
    else if (number === undefined || paramf number !== 'number'){
        return array[0];
    }
    else if (number < 0) {
        return [];
    }
    else if (number > array.length){
        return array;
    }
    else {
        array.splice(number, array.length-1);    
        return array;
    }
};

module.exports.first = first;

/**
 * last:  Designed to evaluate the datatype of two input values, "Array" & "Number",
 *        and return the last "Number" of items in "Array". 
 *  
 * @param {Array} array: The array from which an item will be returned  
 * @param {Number} number: The number representing the index of the array
 * 
 * @return {Value}: if no array is given or number is negative value returned will be empty array literal "[]", 
 *                  if number > array.length return entire array, and if number is Nan or not given return 
 *                  value is the last value of array. 
 *                   
 *  
 */
 
function last(array,number){
    if (!Array.isArray(array)){
        return [];
    } 
    else if (number === undefined || paramf number !== 'number'){
        return array[array.length-1];
    }
    else if (number < 0) {
        return [];
    }
    else if (number > array.length){
        return array;
    }
    else if (number) {
         return array.slice(array.length-number, array.length);    
    }
}; 

module.exports.last = last;

/**
 * indexOf: Designed to loop through "Array" and return the index of "value" if 
 *          present.  
 * 
 * @param:{Array} array: The array in which the item will be searched for 
 * @param:{Value} value: The value the search through the array to find index of 
 * 
 * @return:{Number}: The return value will be a number value repsenting index or 
 *                   -1 if value is not present in array    
 * 
 */
 
 function indexOf(array, value){
    for (let i =0; i < array.length;i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Designed to evaluate the presence of a "Value" in a "Array" 
 * 
 * @param {Array} array: the array in which to look for value
 * @param {Value} value: the value to search for in the array
 * 
 * @ return {Boolean}: the return value will be either true or false to 
 *                     indicate presence of value in array 
 *                     
 */

function contains(array, value){
    return array.includes(value)? true:false;
};

module.exports.contains = contains;


/**
 * each: Designed to loop over a "collection" which could be an Array or Object 
 *       and applies the function "action" to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection 
 *                      
 * @return {Undefined}: does not return actuall value 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique:  accepts and array and returns a new array without duplicates   
 * 
 * @param {Array} array: the array filled with duplicate values 
 * 
 * @return {Array}: new array without duokicate values from original input
 * 
 */
 
 
function unique(array){
   let newArray = [];
   
   for (let i = 0; i < array.length; i++){
        indexOf(array,array[i])
        if (indexOf(newArray,array[i]) === -1){
               newArray.push(array[i])
           }
        } 
   return newArray;
}
 
 module.exports.unique = unique;
 
 
 
 /**
  * filter: Accepts an Array and a Function, "array" && "func", and returns a 
  *         new array with all values that result to true when passed to function. 
  * 
  * @param {Array} array: input array with values to be tested
  * @param {Function} func: input function is called upon each value, index, and the entire collection
  * 
  * @return {Array}:  the return value is a new array with all values that returned 
  *                   true when passed to input function
  * 
  */
  
function filter(array, func){
    let localArray = [];
    for (let i = 0; i < array.length; i++){
        func(array[i], i, array);
        if(func(array[i],i,array)){
            localArray.push(array[i]);
        }
     }
    return localArray;
 }
 
 module.exports.filter = filter;
 
 
 /**
  * reject: Accepts an Array and a Function, "array" && "func", and returns a 
  *         new array with all values that result to false when passed to function. 
  * 
  * @param {Array} array: input array with values to be tested
  * @param {Function} func: input function is called upon each value, index, and the entire collection
  * 
  * @return {Array}:  the return value is a new array with all values that returned 
  *                   false when passed to input function
  * 
  */
  
  function reject(array, func){
    let insideArray = [];
    for (let i = 0; i < array.length; i++){
        filter(array[i], func);
        if(!func(array[i],i,array)){
            insideArray.push(array[i]);
        }
     }
    return insideArray;   
}

module.exports.reject = reject;



/**
 * partition:  Accepts an Array and a Function, "array" && "func", and returns a 
  *            new array of arrays with all values that result first to true &  
  *            then to false then to false when passed to function. 
  * 
  * @param {Array} array: input array with values to be tested
  * @param {Function} func: input function is called upon each value, index, and the entire collection
  * 
  * @return {Array}:  the return value is a new array with 2 sub-arrays with all  
  *                   values that returned values that returned true and then  
  *                   those that returned false. 
 */
 
 function partition(array, func){
    let doubleArray = [];
    doubleArray[0] = [];
    doubleArray[1] = [];
    for (let i = 0; i < array.length; i++){
        func(array[i], array[i]['key'],array)
        if (func(array[i], array[i]['key'],array)){
            doubleArray[0].push(array[i])
            }
        else {
           doubleArray[1].push(array[i]); 
            }
        }
    return doubleArray;
}


module.exports.partition = partition;


/**
 * map: Accepts "list" (Array or Object) and "func" (a Function), then returns an 
 *      array of the results of passing each element in list to func.    
 * 
 * @param {Array or Object} list: collection of values to be passed to function
 * @param {Function} func: the function to be called on list values 
 * 
 * @return {Array}: new array of results of calling function on list values 
 * 
 */
 
 
function map(list,func){
    let anotherArray = [];
    if (Array.isArray(list)){
        for (let i = 0; i < list.length; i++){
            anotherArray.push(func(list[i],i,list));
        }
    } 
    else if (paramf list === 'object') {
        for (let key in list){
            anotherArray.push(func(list[key], key, list));
        }
    } 
    return anotherArray;
};

module.exports.map = map;


/**
 * pluck: accepts an array of objects "arrObj" and a string "prop", then returns 
 *        an array containing the values at that key from each nested object   
 * 
 * @param {Array} arrObj: an array of objects from the values will be retrieved
 * @param {String} prop:  name of the key in each objects to retrieve values from 
 * 
 * @return {Array}: the return value will be an array of the values retrieved 
 *                  from objects in the input array at the given key
 * 
 */
 
 
function pluck(arrObj, prop){
    let nestedInfo = map(arrObj,function(obj){
        return obj[prop];
        })
    
    return nestedInfo;
}

module.exports.pluck = pluck;


/**
 * every: accepts an Array or Object "list" and a Function "func" then after 
 *        invoking input function on all collection values returns true only if  
 *        all return values are true.  
 * 
 * @param {Array or Object} list: collection housing 
 * @param {Function} func: function to call on all input collection values
 * 
 * @return {Boolean}: will return true if all function calls return true, 
 *                    if no function given will return true only if all array 
 *                    values are truthy. 
 * @return {Boolean}: will return false if one function call is false, or if no 
 *                    function is given will return false if one value is falsey.
 * 
 */
 
 
// PLACE FUNCTION DECLARATION HERE  

 function every(collection, funct){
    let allPass = true;
    if (!funct){
        for (let i = 0; i < collection.length;i++){
            if (collection[i] === false){
                allPass = false;
            }
        }
        return allPass;
    }
    each(collection, function(element, index, collection){
       if(!funct(element, index, collection)){
           allPass = false;
       } 
    });
   return allPass; 
};

module.exports.every = every;
 
 
/**
 * some: accepts an Array or Object "list" and a Function "func" then after 
 *       invoking input function on all collection values returns true if one 
 *       or more return value is true.  
 * 
 * @param {Array or Object} list: collection housing 
 * @param {Function} func: function to call on all input collection values
 * 
 * @return {Boolean}: will return true if one or more function calls return value is true 
 *                    or if no function is given will return true if one array value is truthy
 * @return {Boolean}: will return false only if all results of function call is false, or 
 *                    if no function is given will return false if all values are falsey values
 * 
 */
 
  
// PLACE FUNCTION DECLARATION HERE  

function some(list, func){
    let somePassed = false;
    if (!func){
        for (let i = 0; i < list.length;i++){
            if (list[i] === true){
                somePassed = true;
            }
        }
    return somePassed;
    }
    each(list, function(element, index, collection){
       if(func(element, index, collection)){
           somePassed = true;
       } 
    });
    return somePassed;
}

module.exports.some = some;
 
 
/**
 * reduce: accepts 3 parameters an Array "list", a Function "func", and a Seed 
 *         "seed" (desired return data type). Reduce calls the given function 
 *          on each value of input array returning a single  reduced value.
 *                
 * @param {Array} list: collection holding values to be reduced by input fucntion 
 * @param {Function} func: function to be performed on elements of input array
 * @param {Value} seed: desired return data type
 * 
 * @result {Value}: return value could be of any datatype
 */

 
// PLACE FUNCTION DECLARATION HERE  

function reduce(list, func, seed){
    let previousResult;
    if (seed !== undefined){
        previousResult = seed;
        each(list, function(element, i, list){
          previousResult = func(previousResult, element, i, list)  
        });
    }
    else {
        previousResult = list[0];
        for (let i = 1; i < list.length; i++){
            previousResult = func(previousResult, list[i], i, list);  
        }
    }
    return previousResult;
}

module.exports.reduce = reduce; 


 
/**
 * extend: accepts an infinte number of objects and returns first object updated  
 *         in order with of properties of all following input objects.  
 * 
 * @param {Object} object: the input object/s to be copied  
 * 
 * @return {Object}: return value is an object with copies of input object/s 
 *                   in order
 * 
 */
 
// PLACE FUNCTION DECLARATION HERE  
function extend(...object){
    return Object.assign(...object);
}


module.exports.extend = extend;
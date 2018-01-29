console.log('A List')

function  arrayToList(array) {
    var list = null;
    
    for (var i = 0; i < array.length; i++){
        list = addElement(list, array[i]);
    }

    return list;
}

// return a list with new node inserted
function addElement(list, val) {
    var newNode = {
        value: val,
        rest: null
    };
    
    var node = list;

    // insert first node
    if(node == null){
        list = newNode;
    }else{
        // search for the last node is the list
        while(node.rest != null){
            node = node.rest;
        }        
        node.rest = newNode;
    }

    return list;    
}

function listToArray(list) {
    var node = list;
    var array = [];
    while(node != null){
        array.push(node.value);
        node = node.rest;
    }
    return array;
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    }
}

function nth(list, value) {
    var node = list;

    var i = 0;

    while(node != null){
        if(i == value)
            return node.value;
        node = node.rest;
        i++;
    }

    return undefined;
}

function printList(list) {
    var node = list;
    while(node != null){
        console.log('Node value: %d', node.value);
        node = node.rest;
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
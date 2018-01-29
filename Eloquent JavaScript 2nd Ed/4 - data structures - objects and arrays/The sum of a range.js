console.log('The sum of a range')

function range(start, end, step){
	var list = []
	
	// in case the step argument is not given
	if (arguments.length == 2){
		step = 1;
	}	
	
	// from a lower value to greater value
	if (start < end){
		for (var i = start; i <= end; i += step)
			list.push(i);		
	}else{
		for (var i = start; i >= end; i += step)
			list.push(i);		
	}

	return list;
}

function sum(list) {
	var total = 0;
	for(var i = 0; i < list.length; i++)
		total += list[i];
	return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
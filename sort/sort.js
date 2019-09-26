

// merge sort
function merge(left, right){
    let result = [];
    while(left.length > 0 && right.length > 0) {
       if(left[0] < right[0]) {
           result.push(left.shift());
       }
       else {
           result.push(right.shift());
       }
   }
   return result.concat(left).concat(right);
}

function mergeSort(nums) {      
    if(nums.length==1) {return nums};
    let mid = Math.floor(nums.length/2);
    let left_arr = nums.slice(0,mid);
    let right_arr = nums.slice(mid);
    return merge(mergeSort(left_arr),mergeSort(right_arr));
}



// fast sort
function fastSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let midIndex = Math.floor(arr.length / 2);
	let midValue = arr.splice(midIndex, 1)[0]; 
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < midValue) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return fastSort(left).concat([midValue], fastSort(right));
};



// test
let arr1 = [2,4,7,9,3,7];
let arr2 = [10,66,7,22,3,74,66,33,66,7,22,3,74,66,33,66,7,22,3,74,66,33,66,7,22,3,74,66,33,66,7,22,3,74,66,33,66,7,22,3,74,66,33,66,7,22,3,74,66,33];


function test(fn,data) {
	let myDate = new Date();
	let startTime = myDate.getTime(); 
	console.log(fn(data));
	let endTime = myDate.getTime(); 
	let timeCost = (endTime-startTime)/1000;
	console.log('cost ' + timeCost + 's');
}

test(mergeSort,arr1);
test(mergeSort,arr2);
test(fastSort,arr1);
test(fastSort,arr2);


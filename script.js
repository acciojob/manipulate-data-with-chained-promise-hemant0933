//your JS code here. If required.


function MyPromise(arr){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const filteredArr = arr.filter(item => item%2 === 0);

			const manupulatedArr = filteredArr.map(num => num%2 === 0 ? num*2 : num);
			resolve(manupulatedArr);
		},3000)
	})
}

MyPromise([1,2,3,4]).then(filteredArr =>{
	 setTimeout(() => {
      document.getElementById("output").innerHTML = filteredArr.toString();
    }, 1000);
	    return filteredArr;

}).then(manupulatedArr=>{
	setTimeout(() => {
		document.getElementById("output").innerHTML = manupulatedArr.toString();
	},2000)
})
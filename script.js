function manipulateData(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then((arr) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredArr = arr.filter(num => num % 2 === 0);
        resolve(filteredArr);
      }, 1000);
    });
  })
  .then((arr) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedArr = arr.map(num => num * 2);
        resolve(multipliedArr);
      }, 2000);
    });
  })
  .then((arr) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = arr.join(", ");
  });
}

manipulateData([1, 2, 3, 4]);
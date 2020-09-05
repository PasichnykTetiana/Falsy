function bouncer(arr) {
    console.log(arr.length)
    console.log(typeof arr[4])
    let arr1 = [];
    for(let i=0; i<arr.length; i++){
        console.log(arr[i] === "NaN")
                if(arr[i] === "" || Number.isNaN(arr[i]) || arr[i] === 0 || typeof arr[i] !== "string" && typeof arr[i] !== "number") {
                    arr.splice(i, 1);  
                    console.log("d " + i);
                   i--;
        }

    }
    console.log(arr)
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);

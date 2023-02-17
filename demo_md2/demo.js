let arr = [1,2,3,4,5,6,5,5,5,5,5]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        arr.splice(i, 1, ' hi')
    }
}
console.log(arr)

function fibonacci(n: number) {
    let n1: number = 0;
    let n2: number = 1;
    let sum: number = 0;
    let nextnumber: number = 0;
    for (let i=0; i <= n; i++) {
        console.log(n1)
        nextnumber = n1 + n2;
        n1 = n2;
        n2 = nextnumber
    }
    sum = nextnumber;
    console.log('Tong: ' + sum)
}
fibonacci(20)

// 1.
const n = 5
let p = ""
for (let i = 0; i < n; i++) {
    p = p.concat("*")
    console.log(`${p}`);
}

//2.
const t = 5
for (let j = 0; j < t; j++) {
    let star1 = ""
    for (let k = 0; k < j + 1; k++) {
        star1 = star1.concat("*")
    }
    console.log(`${star1}`);
}
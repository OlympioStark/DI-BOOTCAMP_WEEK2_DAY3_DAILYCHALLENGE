let n = "*"
let p = "**"
for (let i = 0; i < 1; i++) {
    console.log(`${n}`);
    for (let j = 0; j < 1; j++) {
        console.log(`${p}`);
        for (let k = 0; k < 1; k++) {
            console.log(`${n}${p}`);
            for (let l = 0; l < 1; l++) {
                console.log(`${p}${p}`);
                for (let m = 0; m < 1; m++) {
                    console.log(`${p}${p}${n}`);
                    for (let a = 0; a < 1; a++) {
                        console.log(`${p}${p}${p}`);
                        break
                    }
                }
            }
        }
    }
}